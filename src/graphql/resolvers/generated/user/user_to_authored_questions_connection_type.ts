// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import { GraphQLObjectType } from "graphql";
import { GraphQLConnectionType } from "@lolopinto/ent/graphql";
import { UserToAuthoredQuestionsEdge } from "src/ent/";
import { QuestionType } from "src/graphql/resolvers/internal";

var connType: GraphQLConnectionType<
  GraphQLObjectType,
  UserToAuthoredQuestionsEdge
>;

export const UserToAuthoredQuestionsConnectionType = () => {
  if (connType === undefined) {
    connType = new GraphQLConnectionType(
      "UserToAuthoredQuestions",
      QuestionType,
    );
  }
  return connType;
};
