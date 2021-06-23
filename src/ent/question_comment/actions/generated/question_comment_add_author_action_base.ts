// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  AllowIfViewerHasIdentityPrivacyPolicy,
  AssocEdgeInputOptions,
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
import { QuestionComment, User } from "src/ent/";
import {
  QuestionCommentBuilder,
  QuestionCommentInput,
} from "src/ent/question_comment/actions/question_comment_builder";

export class QuestionCommentAddAuthorActionBase
  implements Action<QuestionComment>
{
  public readonly builder: QuestionCommentBuilder;
  public readonly viewer: Viewer;
  protected questionComment: QuestionComment;

  constructor(viewer: Viewer, questionComment: QuestionComment) {
    this.viewer = viewer;
    this.builder = new QuestionCommentBuilder(
      this.viewer,
      WriteOperation.Edit,
      this,
      questionComment,
    );
    this.questionComment = questionComment;
  }

  getPrivacyPolicy(): PrivacyPolicy {
    return AllowIfViewerHasIdentityPrivacyPolicy;
  }

  getInput(): QuestionCommentInput {
    return {};
  }

  addAuthor(...ids: ID[]): this;
  addAuthor(...nodes: User[]): this;
  addAuthor(...nodes: Builder<User>[]): this;
  addAuthor(...nodes: ID[] | User[] | Builder<User>[]): this {
    nodes.forEach((node) => this.builder.addAuthor(node));
    return this;
  }

  addAuthorID(id: ID | Builder<User>, options?: AssocEdgeInputOptions): this {
    this.builder.addAuthorID(id, options);
    return this;
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

  static create<T extends QuestionCommentAddAuthorActionBase>(
    this: new (viewer: Viewer, questionComment: QuestionComment) => T,
    viewer: Viewer,
    questionComment: QuestionComment,
  ): QuestionCommentAddAuthorActionBase {
    return new this(viewer, questionComment);
  }

  static async saveXFromID<T extends QuestionCommentAddAuthorActionBase>(
    this: new (viewer: Viewer, questionComment: QuestionComment) => T,
    viewer: Viewer,
    id: ID,
    authorID: ID,
  ): Promise<QuestionComment> {
    let questionComment = await QuestionComment.loadX(viewer, id);
    return await new this(viewer, questionComment).addAuthor(authorID).saveX();
  }
}
