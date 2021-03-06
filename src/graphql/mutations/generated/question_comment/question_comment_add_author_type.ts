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
import { QuestionComment } from "src/ent/";
import QuestionCommentAddAuthorAction from "src/ent/question_comment/actions/question_comment_add_author_action";
import { QuestionCommentType } from "src/graphql/resolvers/";

interface customQuestionCommentAddAuthorInput {
  questionCommentID: string;
  authorID: string;
}

interface QuestionCommentAddAuthorPayload {
  questionComment: QuestionComment;
}

export const QuestionCommentAddAuthorInputType = new GraphQLInputObjectType({
  name: "QuestionCommentAddAuthorInput",
  fields: (): GraphQLInputFieldConfigMap => ({
    questionCommentID: {
      type: GraphQLNonNull(GraphQLID),
    },
    authorID: {
      type: GraphQLNonNull(GraphQLID),
    },
  }),
});

export const QuestionCommentAddAuthorPayloadType = new GraphQLObjectType({
  name: "QuestionCommentAddAuthorPayload",
  fields: (): GraphQLFieldConfigMap<
    QuestionCommentAddAuthorPayload,
    RequestContext
  > => ({
    questionComment: {
      type: GraphQLNonNull(QuestionCommentType),
    },
  }),
});

export const QuestionCommentAddAuthorType: GraphQLFieldConfig<
  undefined,
  RequestContext,
  { [input: string]: customQuestionCommentAddAuthorInput }
> = {
  type: GraphQLNonNull(QuestionCommentAddAuthorPayloadType),
  args: {
    input: {
      description: "",
      type: GraphQLNonNull(QuestionCommentAddAuthorInputType),
    },
  },
  resolve: async (
    _source,
    { input },
    context: RequestContext,
    _info: GraphQLResolveInfo,
  ): Promise<QuestionCommentAddAuthorPayload> => {
    let questionComment = await QuestionCommentAddAuthorAction.saveXFromID(
      context.getViewer(),
      mustDecodeIDFromGQLID(input.questionCommentID),
      mustDecodeIDFromGQLID(input.authorID),
    );
    return { questionComment: questionComment };
  },
};
