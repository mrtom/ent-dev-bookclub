// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  Ent,
  ID,
  LoadEntOptions,
  Viewer,
  loadEnt,
  loadEntX,
} from "@snowtop/ent";
import {
  Answer,
  AnswerComment,
  AnswerVote,
  Question,
  QuestionComment,
  QuestionPrivateNote,
  QuestionVote,
  User,
  UserAuthentication,
} from "src/ent/";
import { NodeType } from "./const";

export async function loadEntByType(
  viewer: Viewer,
  type: NodeType,
  id: ID,
): Promise<Ent | null> {
  return loadEnt(viewer, id, getLoaderOptions(type));
}

export async function loadEntXByType(
  viewer: Viewer,
  type: NodeType,
  id: ID,
): Promise<Ent> {
  return loadEntX(viewer, id, getLoaderOptions(type));
}

export function getLoaderOptions(type: NodeType): LoadEntOptions<Ent> {
  switch (type) {
    case NodeType.Answer:
      return Answer.loaderOptions();
    case NodeType.AnswerComment:
      return AnswerComment.loaderOptions();
    case NodeType.AnswerVote:
      return AnswerVote.loaderOptions();
    case NodeType.Question:
      return Question.loaderOptions();
    case NodeType.QuestionComment:
      return QuestionComment.loaderOptions();
    case NodeType.QuestionPrivateNote:
      return QuestionPrivateNote.loaderOptions();
    case NodeType.QuestionVote:
      return QuestionVote.loaderOptions();
    case NodeType.User:
      return User.loaderOptions();
    case NodeType.UserAuthentication:
      return UserAuthentication.loaderOptions();
  }
}
