// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  AllowIfViewerHasIdentityPrivacyPolicy,
  ID,
  PrivacyPolicy,
  Viewer,
} from "@lolopinto/ent";
import {
  Action,
  Builder,
  Changeset,
  WriteOperation,
} from "@lolopinto/ent/action";
import { Question, QuestionComment, User } from "src/ent/";
import {
  QuestionCommentBuilder,
  QuestionCommentInput,
} from "src/ent/question_comment/actions/question_comment_builder";

export interface QuestionCommentCreateInput {
  body: string;
  questionID: ID | Builder<Question>;
  authorID: ID | Builder<User>;
}

export class CreateQuestionCommentActionBase
  implements Action<QuestionComment>
{
  public readonly builder: QuestionCommentBuilder;
  public readonly viewer: Viewer;
  protected input: QuestionCommentCreateInput;

  constructor(viewer: Viewer, input: QuestionCommentCreateInput) {
    this.viewer = viewer;
    this.input = input;
    this.builder = new QuestionCommentBuilder(
      this.viewer,
      WriteOperation.Insert,
      this,
    );
  }

  getPrivacyPolicy(): PrivacyPolicy {
    return AllowIfViewerHasIdentityPrivacyPolicy;
  }

  getInput(): QuestionCommentInput {
    return this.input;
  }

  async changeset(): Promise<Changeset<QuestionComment>> {
    return this.builder.build();
  }

  async valid(): Promise<boolean> {
    return this.builder.valid();
  }

  async validX(): Promise<void> {
    await this.builder.validX();
  }

  async save(): Promise<QuestionComment | null> {
    await this.builder.save();
    return await this.builder.editedEnt();
  }

  async saveX(): Promise<QuestionComment> {
    await this.builder.saveX();
    return await this.builder.editedEntX();
  }

  static create<T extends CreateQuestionCommentActionBase>(
    this: new (viewer: Viewer, input: QuestionCommentCreateInput) => T,
    viewer: Viewer,
    input: QuestionCommentCreateInput,
  ): CreateQuestionCommentActionBase {
    return new this(viewer, input);
  }
}