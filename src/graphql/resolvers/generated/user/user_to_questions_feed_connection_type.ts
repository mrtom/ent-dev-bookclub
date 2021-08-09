// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import { GraphQLObjectType } from "graphql";
import { Data } from "@snowtop/ent";
import { GraphQLConnectionType } from "@snowtop/ent/graphql";
import { QuestionType } from "src/graphql/resolvers/internal";

var connType: GraphQLConnectionType<GraphQLObjectType, Data>;

export const UserToQuestionsFeedConnectionType = () => {
  if (connType === undefined) {
    connType = new GraphQLConnectionType("UserToQuestionsFeed", QuestionType);
  }
  return connType;
};
