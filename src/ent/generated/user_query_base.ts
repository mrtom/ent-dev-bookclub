// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  AssocEdgeCountLoaderFactory,
  AssocEdgeLoaderFactory,
  AssocEdgeQueryBase,
  EdgeQuerySource,
  Viewer,
} from "@snowtop/ent";
import {
  Answer,
  AnswerComment,
  AnswerCommentToAuthorsQuery,
  AnswerToAuthorsQuery,
  AnswerToCommentsQuery,
  EdgeType,
  Question,
  QuestionComment,
  QuestionCommentToAuthorsQuery,
  QuestionPrivateNote,
  QuestionPrivateNoteToAuthorsQuery,
  QuestionToAnswersQuery,
  QuestionToAuthorsQuery,
  QuestionToCommentsQuery,
  QuestionToPrivateNotesQuery,
  QuestionToVotesQuery,
  QuestionVote,
  QuestionVoteToVotersQuery,
  User,
  UserToAuthorToAuthoredAnswerCommentsEdge,
  UserToAuthorToAuthoredAnswersEdge,
  UserToAuthorToAuthoredQuestionCommentsEdge,
  UserToAuthorToAuthoredQuestionsEdge,
  UserToAuthoredAnswerCommentsEdge,
  UserToAuthoredAnswersEdge,
  UserToAuthoredQuestionCommentsEdge,
  UserToAuthoredQuestionsEdge,
  UserToQuestionPrivateNotesEdge,
  UserToQuestionsVotedEdge,
  UserToUserQuestionPrivateNotesEdge,
  UserToVoterToQuestionsVotedEdge,
} from "src/ent/internal";

export const userToAuthorToAuthoredAnswerCommentsCountLoaderFactory =
  new AssocEdgeCountLoaderFactory(
    EdgeType.UserToAuthorToAuthoredAnswerComments,
  );
export const userToAuthorToAuthoredAnswerCommentsDataLoaderFactory =
  new AssocEdgeLoaderFactory(
    EdgeType.UserToAuthorToAuthoredAnswerComments,
    () => UserToAuthorToAuthoredAnswerCommentsEdge,
  );

export const userToAuthorToAuthoredAnswersCountLoaderFactory =
  new AssocEdgeCountLoaderFactory(EdgeType.UserToAuthorToAuthoredAnswers);
export const userToAuthorToAuthoredAnswersDataLoaderFactory =
  new AssocEdgeLoaderFactory(
    EdgeType.UserToAuthorToAuthoredAnswers,
    () => UserToAuthorToAuthoredAnswersEdge,
  );

export const userToAuthorToAuthoredQuestionCommentsCountLoaderFactory =
  new AssocEdgeCountLoaderFactory(
    EdgeType.UserToAuthorToAuthoredQuestionComments,
  );
export const userToAuthorToAuthoredQuestionCommentsDataLoaderFactory =
  new AssocEdgeLoaderFactory(
    EdgeType.UserToAuthorToAuthoredQuestionComments,
    () => UserToAuthorToAuthoredQuestionCommentsEdge,
  );

export const userToAuthorToAuthoredQuestionsCountLoaderFactory =
  new AssocEdgeCountLoaderFactory(EdgeType.UserToAuthorToAuthoredQuestions);
export const userToAuthorToAuthoredQuestionsDataLoaderFactory =
  new AssocEdgeLoaderFactory(
    EdgeType.UserToAuthorToAuthoredQuestions,
    () => UserToAuthorToAuthoredQuestionsEdge,
  );

export const userToAuthoredAnswerCommentsCountLoaderFactory =
  new AssocEdgeCountLoaderFactory(EdgeType.UserToAuthoredAnswerComments);
export const userToAuthoredAnswerCommentsDataLoaderFactory =
  new AssocEdgeLoaderFactory(
    EdgeType.UserToAuthoredAnswerComments,
    () => UserToAuthoredAnswerCommentsEdge,
  );

export const userToAuthoredAnswersCountLoaderFactory =
  new AssocEdgeCountLoaderFactory(EdgeType.UserToAuthoredAnswers);
export const userToAuthoredAnswersDataLoaderFactory =
  new AssocEdgeLoaderFactory(
    EdgeType.UserToAuthoredAnswers,
    () => UserToAuthoredAnswersEdge,
  );

export const userToAuthoredQuestionCommentsCountLoaderFactory =
  new AssocEdgeCountLoaderFactory(EdgeType.UserToAuthoredQuestionComments);
export const userToAuthoredQuestionCommentsDataLoaderFactory =
  new AssocEdgeLoaderFactory(
    EdgeType.UserToAuthoredQuestionComments,
    () => UserToAuthoredQuestionCommentsEdge,
  );

export const userToAuthoredQuestionsCountLoaderFactory =
  new AssocEdgeCountLoaderFactory(EdgeType.UserToAuthoredQuestions);
export const userToAuthoredQuestionsDataLoaderFactory =
  new AssocEdgeLoaderFactory(
    EdgeType.UserToAuthoredQuestions,
    () => UserToAuthoredQuestionsEdge,
  );

export const userToQuestionPrivateNotesCountLoaderFactory =
  new AssocEdgeCountLoaderFactory(EdgeType.UserToQuestionPrivateNotes);
export const userToQuestionPrivateNotesDataLoaderFactory =
  new AssocEdgeLoaderFactory(
    EdgeType.UserToQuestionPrivateNotes,
    () => UserToQuestionPrivateNotesEdge,
  );

export const userToQuestionsVotedCountLoaderFactory =
  new AssocEdgeCountLoaderFactory(EdgeType.UserToQuestionsVoted);
export const userToQuestionsVotedDataLoaderFactory = new AssocEdgeLoaderFactory(
  EdgeType.UserToQuestionsVoted,
  () => UserToQuestionsVotedEdge,
);

export const userToUserQuestionPrivateNotesCountLoaderFactory =
  new AssocEdgeCountLoaderFactory(EdgeType.UserToUserQuestionPrivateNotes);
export const userToUserQuestionPrivateNotesDataLoaderFactory =
  new AssocEdgeLoaderFactory(
    EdgeType.UserToUserQuestionPrivateNotes,
    () => UserToUserQuestionPrivateNotesEdge,
  );

export const userToVoterToQuestionsVotedCountLoaderFactory =
  new AssocEdgeCountLoaderFactory(EdgeType.UserToVoterToQuestionsVoted);
export const userToVoterToQuestionsVotedDataLoaderFactory =
  new AssocEdgeLoaderFactory(
    EdgeType.UserToVoterToQuestionsVoted,
    () => UserToVoterToQuestionsVotedEdge,
  );

export class UserToAuthorToAuthoredAnswerCommentsQueryBase extends AssocEdgeQueryBase<
  User,
  AnswerComment,
  UserToAuthorToAuthoredAnswerCommentsEdge
> {
  constructor(viewer: Viewer, src: EdgeQuerySource<User>) {
    super(
      viewer,
      src,
      userToAuthorToAuthoredAnswerCommentsCountLoaderFactory,
      userToAuthorToAuthoredAnswerCommentsDataLoaderFactory,
      AnswerComment.loaderOptions(),
    );
  }

  static query<T extends UserToAuthorToAuthoredAnswerCommentsQueryBase>(
    this: new (viewer: Viewer, src: EdgeQuerySource<User>) => T,
    viewer: Viewer,
    src: EdgeQuerySource<User>,
  ): T {
    return new this(viewer, src);
  }

  queryAuthors(): AnswerCommentToAuthorsQuery {
    return AnswerCommentToAuthorsQuery.query(this.viewer, this);
  }
}

export class UserToAuthorToAuthoredAnswersQueryBase extends AssocEdgeQueryBase<
  User,
  Answer,
  UserToAuthorToAuthoredAnswersEdge
> {
  constructor(viewer: Viewer, src: EdgeQuerySource<User>) {
    super(
      viewer,
      src,
      userToAuthorToAuthoredAnswersCountLoaderFactory,
      userToAuthorToAuthoredAnswersDataLoaderFactory,
      Answer.loaderOptions(),
    );
  }

  static query<T extends UserToAuthorToAuthoredAnswersQueryBase>(
    this: new (viewer: Viewer, src: EdgeQuerySource<User>) => T,
    viewer: Viewer,
    src: EdgeQuerySource<User>,
  ): T {
    return new this(viewer, src);
  }

  queryAuthors(): AnswerToAuthorsQuery {
    return AnswerToAuthorsQuery.query(this.viewer, this);
  }

  queryComments(): AnswerToCommentsQuery {
    return AnswerToCommentsQuery.query(this.viewer, this);
  }
}

export class UserToAuthorToAuthoredQuestionCommentsQueryBase extends AssocEdgeQueryBase<
  User,
  QuestionComment,
  UserToAuthorToAuthoredQuestionCommentsEdge
> {
  constructor(viewer: Viewer, src: EdgeQuerySource<User>) {
    super(
      viewer,
      src,
      userToAuthorToAuthoredQuestionCommentsCountLoaderFactory,
      userToAuthorToAuthoredQuestionCommentsDataLoaderFactory,
      QuestionComment.loaderOptions(),
    );
  }

  static query<T extends UserToAuthorToAuthoredQuestionCommentsQueryBase>(
    this: new (viewer: Viewer, src: EdgeQuerySource<User>) => T,
    viewer: Viewer,
    src: EdgeQuerySource<User>,
  ): T {
    return new this(viewer, src);
  }

  queryAuthors(): QuestionCommentToAuthorsQuery {
    return QuestionCommentToAuthorsQuery.query(this.viewer, this);
  }
}

export class UserToAuthorToAuthoredQuestionsQueryBase extends AssocEdgeQueryBase<
  User,
  Question,
  UserToAuthorToAuthoredQuestionsEdge
> {
  constructor(viewer: Viewer, src: EdgeQuerySource<User>) {
    super(
      viewer,
      src,
      userToAuthorToAuthoredQuestionsCountLoaderFactory,
      userToAuthorToAuthoredQuestionsDataLoaderFactory,
      Question.loaderOptions(),
    );
  }

  static query<T extends UserToAuthorToAuthoredQuestionsQueryBase>(
    this: new (viewer: Viewer, src: EdgeQuerySource<User>) => T,
    viewer: Viewer,
    src: EdgeQuerySource<User>,
  ): T {
    return new this(viewer, src);
  }

  queryAnswers(): QuestionToAnswersQuery {
    return QuestionToAnswersQuery.query(this.viewer, this);
  }

  queryAuthors(): QuestionToAuthorsQuery {
    return QuestionToAuthorsQuery.query(this.viewer, this);
  }

  queryComments(): QuestionToCommentsQuery {
    return QuestionToCommentsQuery.query(this.viewer, this);
  }

  queryPrivateNotes(): QuestionToPrivateNotesQuery {
    return QuestionToPrivateNotesQuery.query(this.viewer, this);
  }

  queryVotes(): QuestionToVotesQuery {
    return QuestionToVotesQuery.query(this.viewer, this);
  }
}

export class UserToAuthoredAnswerCommentsQueryBase extends AssocEdgeQueryBase<
  User,
  AnswerComment,
  UserToAuthoredAnswerCommentsEdge
> {
  constructor(viewer: Viewer, src: EdgeQuerySource<User>) {
    super(
      viewer,
      src,
      userToAuthoredAnswerCommentsCountLoaderFactory,
      userToAuthoredAnswerCommentsDataLoaderFactory,
      AnswerComment.loaderOptions(),
    );
  }

  static query<T extends UserToAuthoredAnswerCommentsQueryBase>(
    this: new (viewer: Viewer, src: EdgeQuerySource<User>) => T,
    viewer: Viewer,
    src: EdgeQuerySource<User>,
  ): T {
    return new this(viewer, src);
  }

  queryAuthors(): AnswerCommentToAuthorsQuery {
    return AnswerCommentToAuthorsQuery.query(this.viewer, this);
  }
}

export class UserToAuthoredAnswersQueryBase extends AssocEdgeQueryBase<
  User,
  Answer,
  UserToAuthoredAnswersEdge
> {
  constructor(viewer: Viewer, src: EdgeQuerySource<User>) {
    super(
      viewer,
      src,
      userToAuthoredAnswersCountLoaderFactory,
      userToAuthoredAnswersDataLoaderFactory,
      Answer.loaderOptions(),
    );
  }

  static query<T extends UserToAuthoredAnswersQueryBase>(
    this: new (viewer: Viewer, src: EdgeQuerySource<User>) => T,
    viewer: Viewer,
    src: EdgeQuerySource<User>,
  ): T {
    return new this(viewer, src);
  }

  queryAuthors(): AnswerToAuthorsQuery {
    return AnswerToAuthorsQuery.query(this.viewer, this);
  }

  queryComments(): AnswerToCommentsQuery {
    return AnswerToCommentsQuery.query(this.viewer, this);
  }
}

export class UserToAuthoredQuestionCommentsQueryBase extends AssocEdgeQueryBase<
  User,
  QuestionComment,
  UserToAuthoredQuestionCommentsEdge
> {
  constructor(viewer: Viewer, src: EdgeQuerySource<User>) {
    super(
      viewer,
      src,
      userToAuthoredQuestionCommentsCountLoaderFactory,
      userToAuthoredQuestionCommentsDataLoaderFactory,
      QuestionComment.loaderOptions(),
    );
  }

  static query<T extends UserToAuthoredQuestionCommentsQueryBase>(
    this: new (viewer: Viewer, src: EdgeQuerySource<User>) => T,
    viewer: Viewer,
    src: EdgeQuerySource<User>,
  ): T {
    return new this(viewer, src);
  }

  queryAuthors(): QuestionCommentToAuthorsQuery {
    return QuestionCommentToAuthorsQuery.query(this.viewer, this);
  }
}

export class UserToAuthoredQuestionsQueryBase extends AssocEdgeQueryBase<
  User,
  Question,
  UserToAuthoredQuestionsEdge
> {
  constructor(viewer: Viewer, src: EdgeQuerySource<User>) {
    super(
      viewer,
      src,
      userToAuthoredQuestionsCountLoaderFactory,
      userToAuthoredQuestionsDataLoaderFactory,
      Question.loaderOptions(),
    );
  }

  static query<T extends UserToAuthoredQuestionsQueryBase>(
    this: new (viewer: Viewer, src: EdgeQuerySource<User>) => T,
    viewer: Viewer,
    src: EdgeQuerySource<User>,
  ): T {
    return new this(viewer, src);
  }

  queryAnswers(): QuestionToAnswersQuery {
    return QuestionToAnswersQuery.query(this.viewer, this);
  }

  queryAuthors(): QuestionToAuthorsQuery {
    return QuestionToAuthorsQuery.query(this.viewer, this);
  }

  queryComments(): QuestionToCommentsQuery {
    return QuestionToCommentsQuery.query(this.viewer, this);
  }

  queryPrivateNotes(): QuestionToPrivateNotesQuery {
    return QuestionToPrivateNotesQuery.query(this.viewer, this);
  }

  queryVotes(): QuestionToVotesQuery {
    return QuestionToVotesQuery.query(this.viewer, this);
  }
}

export class UserToQuestionPrivateNotesQueryBase extends AssocEdgeQueryBase<
  User,
  QuestionPrivateNote,
  UserToQuestionPrivateNotesEdge
> {
  constructor(viewer: Viewer, src: EdgeQuerySource<User>) {
    super(
      viewer,
      src,
      userToQuestionPrivateNotesCountLoaderFactory,
      userToQuestionPrivateNotesDataLoaderFactory,
      QuestionPrivateNote.loaderOptions(),
    );
  }

  static query<T extends UserToQuestionPrivateNotesQueryBase>(
    this: new (viewer: Viewer, src: EdgeQuerySource<User>) => T,
    viewer: Viewer,
    src: EdgeQuerySource<User>,
  ): T {
    return new this(viewer, src);
  }

  queryAuthors(): QuestionPrivateNoteToAuthorsQuery {
    return QuestionPrivateNoteToAuthorsQuery.query(this.viewer, this);
  }
}

export class UserToQuestionsVotedQueryBase extends AssocEdgeQueryBase<
  User,
  QuestionVote,
  UserToQuestionsVotedEdge
> {
  constructor(viewer: Viewer, src: EdgeQuerySource<User>) {
    super(
      viewer,
      src,
      userToQuestionsVotedCountLoaderFactory,
      userToQuestionsVotedDataLoaderFactory,
      QuestionVote.loaderOptions(),
    );
  }

  static query<T extends UserToQuestionsVotedQueryBase>(
    this: new (viewer: Viewer, src: EdgeQuerySource<User>) => T,
    viewer: Viewer,
    src: EdgeQuerySource<User>,
  ): T {
    return new this(viewer, src);
  }

  queryVoters(): QuestionVoteToVotersQuery {
    return QuestionVoteToVotersQuery.query(this.viewer, this);
  }
}

export class UserToUserQuestionPrivateNotesQueryBase extends AssocEdgeQueryBase<
  User,
  QuestionPrivateNote,
  UserToUserQuestionPrivateNotesEdge
> {
  constructor(viewer: Viewer, src: EdgeQuerySource<User>) {
    super(
      viewer,
      src,
      userToUserQuestionPrivateNotesCountLoaderFactory,
      userToUserQuestionPrivateNotesDataLoaderFactory,
      QuestionPrivateNote.loaderOptions(),
    );
  }

  static query<T extends UserToUserQuestionPrivateNotesQueryBase>(
    this: new (viewer: Viewer, src: EdgeQuerySource<User>) => T,
    viewer: Viewer,
    src: EdgeQuerySource<User>,
  ): T {
    return new this(viewer, src);
  }

  queryAuthors(): QuestionPrivateNoteToAuthorsQuery {
    return QuestionPrivateNoteToAuthorsQuery.query(this.viewer, this);
  }
}

export class UserToVoterToQuestionsVotedQueryBase extends AssocEdgeQueryBase<
  User,
  QuestionVote,
  UserToVoterToQuestionsVotedEdge
> {
  constructor(viewer: Viewer, src: EdgeQuerySource<User>) {
    super(
      viewer,
      src,
      userToVoterToQuestionsVotedCountLoaderFactory,
      userToVoterToQuestionsVotedDataLoaderFactory,
      QuestionVote.loaderOptions(),
    );
  }

  static query<T extends UserToVoterToQuestionsVotedQueryBase>(
    this: new (viewer: Viewer, src: EdgeQuerySource<User>) => T,
    viewer: Viewer,
    src: EdgeQuerySource<User>,
  ): T {
    return new this(viewer, src);
  }

  queryVoters(): QuestionVoteToVotersQuery {
    return QuestionVoteToVotersQuery.query(this.viewer, this);
  }
}
