import express from "express";
import { graphqlHTTP } from "express-graphql";
import { IncomingMessage, ServerResponse } from "http";
import passport from "passport";
import cors, { CorsOptions, CorsOptionsDelegate } from "cors";
import { DB } from "@snowtop/ent";
import { buildContext, registerAuthHandler } from "@snowtop/ent/auth";
import {
  PassportStrategyHandler,
} from "@snowtop/ent-passport";

import { User } from "src/ent";
import schema from "./schema";

let app = express();

app.use(passport.initialize());
registerAuthHandler(
  "viewer",
  PassportStrategyHandler.jwtHandler({
    secretOrKey: "secret",
    authOptions: {
      session: false,
    },
    loaderOptions: User.loaderOptions(),
  }),
);

const delegagte: CorsOptionsDelegate = function (req, callback) {
  const corsOptions: CorsOptions = {
    origin: req.headers.origin || "*",
    methods: ["POST", "OPTIONS", "GET", "DELETE", "PATCH"],
    allowedHeaders: [
      "Content-Type",
      "Content-Length",
      "Authorization",
      "Accept",
      "Accept-Encoding",
      "Accept-Language",
    ],
    maxAge: -1,
  };
  callback(null, corsOptions);
};

app.use(
  "/graphql",
  cors(delegagte),
  graphqlHTTP((request: IncomingMessage, response: ServerResponse) => {
    let doWork = async () => {
      let context = await buildContext(request, response);
      return {
        schema: schema,
        graphiql: true,
        context,
      };
    };
    return doWork();
  }),
);
const server = app.listen(process.env.port || 4000);

app.get("/healthz", async (req, res, params) => {
  try {
    const pool = DB.getInstance().getPool();
    await pool.query("SELECT now()");
    res.sendStatus(200);
  } catch (err) {
    console.error("error sending health check", err);
    res.sendStatus(403);
  }
});

function handleShutdown(signal) {
  server.close(() => {
    DB.getInstance()
      .endPool()
      .then(() => {
        process.exit(0);
      });
  });
}
process.on("SIGTERM", handleShutdown);
process.on("SIGINT", handleShutdown);
process.on("SIGHUP", handleShutdown);
