// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import { GraphQLObjectType } from "graphql";
import {
  NodeQueryType,
  RecentQuestionsQueryType,
  UserByEmailQueryType,
  UserQueryType,
  ViewerQueryType,
} from "src/graphql/resolvers/internal";

export const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    node: NodeQueryType,
    recentQuestions: RecentQuestionsQueryType,
    user: UserQueryType,
    userByEmail: UserByEmailQueryType,
    viewer: ViewerQueryType,
  }),
});