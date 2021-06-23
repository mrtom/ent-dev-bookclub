// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  GraphQLBoolean,
  GraphQLFieldConfig,
  GraphQLFieldConfigMap,
  GraphQLID,
  GraphQLInputFieldConfigMap,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLResolveInfo,
  GraphQLString,
} from "graphql";
import { RequestContext } from "@lolopinto/ent";
import { mustDecodeIDFromGQLID } from "@lolopinto/ent/graphql";
import { Answer } from "src/ent/";
import CreateAnswerAction, {
  AnswerCreateInput,
} from "src/ent/answer/actions/create_answer_action";
import { AnswerType } from "src/graphql/resolvers/";

interface customAnswerCreateInput extends AnswerCreateInput {
  questionID: string;
  authorID: string;
}

interface AnswerCreatePayload {
  answer: Answer;
}

export const AnswerCreateInputType = new GraphQLInputObjectType({
  name: "AnswerCreateInput",
  fields: (): GraphQLInputFieldConfigMap => ({
    body: {
      type: GraphQLNonNull(GraphQLString),
    },
    acceptedAnswer: {
      type: GraphQLNonNull(GraphQLBoolean),
    },
    questionID: {
      type: GraphQLNonNull(GraphQLID),
    },
    authorID: {
      type: GraphQLNonNull(GraphQLID),
    },
  }),
});

export const AnswerCreatePayloadType = new GraphQLObjectType({
  name: "AnswerCreatePayload",
  fields: (): GraphQLFieldConfigMap<AnswerCreatePayload, RequestContext> => ({
    answer: {
      type: GraphQLNonNull(AnswerType),
    },
  }),
});

export const AnswerCreateType: GraphQLFieldConfig<
  undefined,
  RequestContext,
  { [input: string]: customAnswerCreateInput }
> = {
  type: GraphQLNonNull(AnswerCreatePayloadType),
  args: {
    input: {
      description: "",
      type: GraphQLNonNull(AnswerCreateInputType),
    },
  },
  resolve: async (
    _source,
    { input },
    context: RequestContext,
    _info: GraphQLResolveInfo,
  ): Promise<AnswerCreatePayload> => {
    let answer = await CreateAnswerAction.create(context.getViewer(), {
      body: input.body,
      acceptedAnswer: input.acceptedAnswer,
      questionID: mustDecodeIDFromGQLID(input.questionID),
      authorID: mustDecodeIDFromGQLID(input.authorID),
    }).saveX();
    return { answer: answer };
  },
};