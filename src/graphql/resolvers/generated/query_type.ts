// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import { GraphQLObjectType } from "graphql";
import {
  NodeQueryType,
  UserByEmailQueryType,
  UserQueryType,
  ViewerQueryType,
} from "src/graphql/resolvers/internal";

export const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    node: NodeQueryType,
    user: UserQueryType,
    userByEmail: UserByEmailQueryType,
    viewer: ViewerQueryType,
  }),
});
