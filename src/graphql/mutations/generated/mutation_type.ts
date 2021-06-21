// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import { GraphQLObjectType } from "graphql";
import { UserCreateType } from "src/graphql/mutations/generated/user/user_create_type";
import { UserAuthJWTType } from "src/graphql/mutations/generated/user_auth_jwt_type";

export const MutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    userAuthJWT: UserAuthJWTType,
    userCreate: UserCreateType,
  }),
});
