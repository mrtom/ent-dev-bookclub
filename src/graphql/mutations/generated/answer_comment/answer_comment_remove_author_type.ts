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
import { RequestContext } from "@lolopinto/ent";
import { mustDecodeIDFromGQLID } from "@lolopinto/ent/graphql";
import { AnswerComment } from "src/ent/";
import AnswerCommentRemoveAuthorAction from "src/ent/answer_comment/actions/answer_comment_remove_author_action";
import { AnswerCommentType } from "src/graphql/resolvers/";

interface customAnswerCommentRemoveAuthorInput {
  answerCommentID: string;
  authorID: string;
}

interface AnswerCommentRemoveAuthorPayload {
  answerComment: AnswerComment;
}

export const AnswerCommentRemoveAuthorInputType = new GraphQLInputObjectType({
  name: "AnswerCommentRemoveAuthorInput",
  fields: (): GraphQLInputFieldConfigMap => ({
    answerCommentID: {
      type: GraphQLNonNull(GraphQLID),
    },
    authorID: {
      type: GraphQLNonNull(GraphQLID),
    },
  }),
});

export const AnswerCommentRemoveAuthorPayloadType = new GraphQLObjectType({
  name: "AnswerCommentRemoveAuthorPayload",
  fields: (): GraphQLFieldConfigMap<
    AnswerCommentRemoveAuthorPayload,
    RequestContext
  > => ({
    answerComment: {
      type: GraphQLNonNull(AnswerCommentType),
    },
  }),
});

export const AnswerCommentRemoveAuthorType: GraphQLFieldConfig<
  undefined,
  RequestContext,
  { [input: string]: customAnswerCommentRemoveAuthorInput }
> = {
  type: GraphQLNonNull(AnswerCommentRemoveAuthorPayloadType),
  args: {
    input: {
      description: "",
      type: GraphQLNonNull(AnswerCommentRemoveAuthorInputType),
    },
  },
  resolve: async (
    _source,
    { input },
    context: RequestContext,
    _info: GraphQLResolveInfo,
  ): Promise<AnswerCommentRemoveAuthorPayload> => {
    let answerComment = await AnswerCommentRemoveAuthorAction.saveXFromID(
      context.getViewer(),
      mustDecodeIDFromGQLID(input.answerCommentID),
      mustDecodeIDFromGQLID(input.authorID),
    );
    return { answerComment: answerComment };
  },
};
