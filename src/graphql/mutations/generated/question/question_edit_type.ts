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
import { RequestContext } from "@snowtop/ent";
import { mustDecodeIDFromGQLID } from "@snowtop/ent/graphql";
import { Question } from "src/ent/";
import EditQuestionAction, {
  QuestionEditInput,
} from "src/ent/question/actions/edit_question_action";
import { QuestionType } from "src/graphql/resolvers/";

interface customQuestionEditInput extends QuestionEditInput {
  questionID: string;
  authorID: string;
}

interface QuestionEditPayload {
  question: Question;
}

export const QuestionEditInputType = new GraphQLInputObjectType({
  name: "QuestionEditInput",
  fields: (): GraphQLInputFieldConfigMap => ({
    questionID: {
      type: GraphQLNonNull(GraphQLID),
    },
    title: {
      type: GraphQLString,
    },
    questionBody: {
      type: GraphQLString,
    },
    answered: {
      type: GraphQLBoolean,
    },
    authorID: {
      type: GraphQLID,
    },
  }),
});

export const QuestionEditPayloadType = new GraphQLObjectType({
  name: "QuestionEditPayload",
  fields: (): GraphQLFieldConfigMap<QuestionEditPayload, RequestContext> => ({
    question: {
      type: GraphQLNonNull(QuestionType),
    },
  }),
});

export const QuestionEditType: GraphQLFieldConfig<
  undefined,
  RequestContext,
  { [input: string]: customQuestionEditInput }
> = {
  type: GraphQLNonNull(QuestionEditPayloadType),
  args: {
    input: {
      description: "",
      type: GraphQLNonNull(QuestionEditInputType),
    },
  },
  resolve: async (
    _source,
    { input },
    context: RequestContext,
    _info: GraphQLResolveInfo,
  ): Promise<QuestionEditPayload> => {
    let question = await EditQuestionAction.saveXFromID(
      context.getViewer(),
      mustDecodeIDFromGQLID(input.questionID),
      {
        title: input.title,
        questionBody: input.questionBody,
        answered: input.answered,
      },
    );
    return { question: question };
  },
};
