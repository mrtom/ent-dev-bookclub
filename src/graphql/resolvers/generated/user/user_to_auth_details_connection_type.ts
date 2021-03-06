// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import { GraphQLObjectType } from "graphql";
import { GraphQLConnectionType } from "@snowtop/ent/graphql";
import { UserToAuthDetailsEdge } from "src/ent/";
import { UserAuthenticationType } from "src/graphql/resolvers/internal";

var connType: GraphQLConnectionType<GraphQLObjectType, UserToAuthDetailsEdge>;

export const UserToAuthDetailsConnectionType = () => {
  if (connType === undefined) {
    connType = new GraphQLConnectionType(
      "UserToAuthDetails",
      UserAuthenticationType,
    );
  }
  return connType;
};
