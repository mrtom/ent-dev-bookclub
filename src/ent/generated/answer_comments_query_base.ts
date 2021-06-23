// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  AssocEdgeCountLoaderFactory,
  AssocEdgeLoaderFactory,
  AssocEdgeQueryBase,
  EdgeQuerySource,
  Viewer,
} from "@lolopinto/ent";
import {
  AnswerComments,
  AnswerCommentsToAuthorsEdge,
  EdgeType,
  User,
  UserToAuthorToAuthoredAnswerCommentsQuery,
  UserToAuthorToAuthoredAnswersQuery,
  UserToAuthorToAuthoredQuestionCommentsQuery,
  UserToAuthorToAuthoredQuestionsQuery,
  UserToAuthoredAnswerCommentsQuery,
  UserToAuthoredAnswersQuery,
  UserToAuthoredQuestionCommentsQuery,
  UserToAuthoredQuestionsQuery,
} from "src/ent/internal";

export const answerCommentsToAuthorsCountLoaderFactory =
  new AssocEdgeCountLoaderFactory(EdgeType.AnswerCommentsToAuthors);
export const answerCommentsToAuthorsDataLoaderFactory =
  new AssocEdgeLoaderFactory(
    EdgeType.AnswerCommentsToAuthors,
    () => AnswerCommentsToAuthorsEdge,
  );

export class AnswerCommentsToAuthorsQueryBase extends AssocEdgeQueryBase<
  AnswerComments,
  User,
  AnswerCommentsToAuthorsEdge
> {
  constructor(viewer: Viewer, src: EdgeQuerySource<AnswerComments>) {
    super(
      viewer,
      src,
      answerCommentsToAuthorsCountLoaderFactory,
      answerCommentsToAuthorsDataLoaderFactory,
      User.loaderOptions(),
    );
  }

  static query<T extends AnswerCommentsToAuthorsQueryBase>(
    this: new (viewer: Viewer, src: EdgeQuerySource<AnswerComments>) => T,
    viewer: Viewer,
    src: EdgeQuerySource<AnswerComments>,
  ): T {
    return new this(viewer, src);
  }

  queryAuthorToAuthoredAnswerComments(): UserToAuthorToAuthoredAnswerCommentsQuery {
    return UserToAuthorToAuthoredAnswerCommentsQuery.query(this.viewer, this);
  }

  queryAuthorToAuthoredAnswers(): UserToAuthorToAuthoredAnswersQuery {
    return UserToAuthorToAuthoredAnswersQuery.query(this.viewer, this);
  }

  queryAuthorToAuthoredQuestionComments(): UserToAuthorToAuthoredQuestionCommentsQuery {
    return UserToAuthorToAuthoredQuestionCommentsQuery.query(this.viewer, this);
  }

  queryAuthorToAuthoredQuestions(): UserToAuthorToAuthoredQuestionsQuery {
    return UserToAuthorToAuthoredQuestionsQuery.query(this.viewer, this);
  }

  queryAuthoredAnswerComments(): UserToAuthoredAnswerCommentsQuery {
    return UserToAuthoredAnswerCommentsQuery.query(this.viewer, this);
  }

  queryAuthoredAnswers(): UserToAuthoredAnswersQuery {
    return UserToAuthoredAnswersQuery.query(this.viewer, this);
  }

  queryAuthoredQuestionComments(): UserToAuthoredQuestionCommentsQuery {
    return UserToAuthoredQuestionCommentsQuery.query(this.viewer, this);
  }

  queryAuthoredQuestions(): UserToAuthoredQuestionsQuery {
    return UserToAuthoredQuestionsQuery.query(this.viewer, this);
  }
}
