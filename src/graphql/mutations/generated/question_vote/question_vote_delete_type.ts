// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  GraphQLFieldConfig,
  GraphQLFieldConfigMap,
  GraphQLID,
  GraphQLInputFieldConfigMap,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLResolveInfo,
} from "graphql";
import { RequestContext } from "@snowtop/ent";
import { mustDecodeIDFromGQLID } from "@snowtop/ent/graphql";
import { QuestionVote } from "src/ent/";
import DeleteQuestionVoteAction from "src/ent/question_vote/actions/delete_question_vote_action";

interface customQuestionVoteDeleteInput {
  questionVoteID: string;
}

interface QuestionVoteDeletePayload {
  deletedQuestionVoteID: string;
}

export const QuestionVoteDeleteInputType = new GraphQLInputObjectType({
  name: "QuestionVoteDeleteInput",
  fields: (): GraphQLInputFieldConfigMap => ({
    questionVoteID: {
      type: GraphQLNonNull(GraphQLID),
    },
  }),
});

export const QuestionVoteDeletePayloadType = new GraphQLObjectType({
  name: "QuestionVoteDeletePayload",
  fields: (): GraphQLFieldConfigMap<
    QuestionVoteDeletePayload,
    RequestContext
  > => ({
    deletedQuestionVoteID: {
      type: GraphQLID,
    },
  }),
});

export const QuestionVoteDeleteType: GraphQLFieldConfig<
  undefined,
  RequestContext,
  { [input: string]: customQuestionVoteDeleteInput }
> = {
  type: GraphQLNonNull(QuestionVoteDeletePayloadType),
  args: {
    input: {
      description: "",
      type: GraphQLNonNull(QuestionVoteDeleteInputType),
    },
  },
  resolve: async (
    _source,
    { input },
    context: RequestContext,
    _info: GraphQLResolveInfo,
  ): Promise<QuestionVoteDeletePayload> => {
    await DeleteQuestionVoteAction.saveXFromID(
      context.getViewer(),
      mustDecodeIDFromGQLID(input.questionVoteID),
    );
    return { deletedQuestionVoteID: input.questionVoteID };
  },
};
