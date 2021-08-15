// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  AssocEdgeCountLoaderFactory,
  AssocEdgeLoaderFactory,
  AssocEdgeQueryBase,
  EdgeQuerySource,
  Viewer,
} from "@snowtop/ent";
import {
  EdgeType,
  QuestionPrivateNote,
  QuestionPrivateNoteToAuthorsEdge,
  User,
  UserToAnswersVotedQuery,
  UserToAuthorToAuthoredAnswerCommentsQuery,
  UserToAuthorToAuthoredAnswersQuery,
  UserToAuthorToAuthoredQuestionCommentsQuery,
  UserToAuthorToAuthoredQuestionsQuery,
  UserToAuthoredAnswerCommentsQuery,
  UserToAuthoredAnswersQuery,
  UserToAuthoredQuestionCommentsQuery,
  UserToAuthoredQuestionsQuery,
  UserToQuestionPrivateNotesQuery,
  UserToQuestionsVotedQuery,
  UserToSavedAuthenticationDetailsQuery,
  UserToUserQuestionPrivateNotesQuery,
  UserToVoterToAnswersVotedQuery,
  UserToVoterToQuestionsVotedQuery,
} from "src/ent/internal";

export const questionPrivateNoteToAuthorsCountLoaderFactory =
  new AssocEdgeCountLoaderFactory(EdgeType.QuestionPrivateNoteToAuthors);
export const questionPrivateNoteToAuthorsDataLoaderFactory =
  new AssocEdgeLoaderFactory(
    EdgeType.QuestionPrivateNoteToAuthors,
    () => QuestionPrivateNoteToAuthorsEdge,
  );

export class QuestionPrivateNoteToAuthorsQueryBase extends AssocEdgeQueryBase<
  QuestionPrivateNote,
  User,
  QuestionPrivateNoteToAuthorsEdge
> {
  constructor(viewer: Viewer, src: EdgeQuerySource<QuestionPrivateNote>) {
    super(
      viewer,
      src,
      questionPrivateNoteToAuthorsCountLoaderFactory,
      questionPrivateNoteToAuthorsDataLoaderFactory,
      User.loaderOptions(),
    );
  }

  static query<T extends QuestionPrivateNoteToAuthorsQueryBase>(
    this: new (viewer: Viewer, src: EdgeQuerySource<QuestionPrivateNote>) => T,
    viewer: Viewer,
    src: EdgeQuerySource<QuestionPrivateNote>,
  ): T {
    return new this(viewer, src);
  }

  queryAnswersVoted(): UserToAnswersVotedQuery {
    return UserToAnswersVotedQuery.query(this.viewer, this);
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

  queryQuestionPrivateNotes(): UserToQuestionPrivateNotesQuery {
    return UserToQuestionPrivateNotesQuery.query(this.viewer, this);
  }

  queryQuestionsVoted(): UserToQuestionsVotedQuery {
    return UserToQuestionsVotedQuery.query(this.viewer, this);
  }

  querySavedAuthenticationDetails(): UserToSavedAuthenticationDetailsQuery {
    return UserToSavedAuthenticationDetailsQuery.query(this.viewer, this);
  }

  queryUserQuestionPrivateNotes(): UserToUserQuestionPrivateNotesQuery {
    return UserToUserQuestionPrivateNotesQuery.query(this.viewer, this);
  }

  queryVoterToAnswersVoted(): UserToVoterToAnswersVotedQuery {
    return UserToVoterToAnswersVotedQuery.query(this.viewer, this);
  }

  queryVoterToQuestionsVoted(): UserToVoterToQuestionsVotedQuery {
    return UserToVoterToQuestionsVotedQuery.query(this.viewer, this);
  }
}
