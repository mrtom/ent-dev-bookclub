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
import QuestionVoteRemoveVoterAction from "src/ent/question_vote/actions/question_vote_remove_voter_action";
import { QuestionVoteType } from "src/graphql/resolvers/";

interface customQuestionVoteRemoveVoterInput {
  questionVoteID: string;
  voterID: string;
}

interface QuestionVoteRemoveVoterPayload {
  questionVote: QuestionVote;
}

export const QuestionVoteRemoveVoterInputType = new GraphQLInputObjectType({
  name: "QuestionVoteRemoveVoterInput",
  fields: (): GraphQLInputFieldConfigMap => ({
    questionVoteID: {
      type: GraphQLNonNull(GraphQLID),
    },
    voterID: {
      type: GraphQLNonNull(GraphQLID),
    },
  }),
});

export const QuestionVoteRemoveVoterPayloadType = new GraphQLObjectType({
  name: "QuestionVoteRemoveVoterPayload",
  fields: (): GraphQLFieldConfigMap<
    QuestionVoteRemoveVoterPayload,
    RequestContext
  > => ({
    questionVote: {
      type: GraphQLNonNull(QuestionVoteType),
    },
  }),
});

export const QuestionVoteRemoveVoterType: GraphQLFieldConfig<
  undefined,
  RequestContext,
  { [input: string]: customQuestionVoteRemoveVoterInput }
> = {
  type: GraphQLNonNull(QuestionVoteRemoveVoterPayloadType),
  args: {
    input: {
      description: "",
      type: GraphQLNonNull(QuestionVoteRemoveVoterInputType),
    },
  },
  resolve: async (
    _source,
    { input },
    context: RequestContext,
    _info: GraphQLResolveInfo,
  ): Promise<QuestionVoteRemoveVoterPayload> => {
    let questionVote = await QuestionVoteRemoveVoterAction.saveXFromID(
      context.getViewer(),
      mustDecodeIDFromGQLID(input.questionVoteID),
      mustDecodeIDFromGQLID(input.voterID),
    );
    return { questionVote: questionVote };
  },
};
