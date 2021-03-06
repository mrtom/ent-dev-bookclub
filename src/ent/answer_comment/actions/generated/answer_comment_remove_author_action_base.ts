// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  AllowIfViewerHasIdentityPrivacyPolicy,
  ID,
  PrivacyPolicy,
  Viewer,
} from "@snowtop/ent";
import { Action, Changeset, WriteOperation } from "@snowtop/ent/action";
import { AnswerComment, User } from "src/ent/";
import {
  AnswerCommentBuilder,
  AnswerCommentInput,
} from "src/ent/answer_comment/actions/answer_comment_builder";

export class AnswerCommentRemoveAuthorActionBase
  implements Action<AnswerComment>
{
  public readonly builder: AnswerCommentBuilder;
  public readonly viewer: Viewer;
  protected answerComment: AnswerComment;

  constructor(viewer: Viewer, answerComment: AnswerComment) {
    this.viewer = viewer;
    this.builder = new AnswerCommentBuilder(
      this.viewer,
      WriteOperation.Edit,
      this,
      answerComment,
    );
    this.answerComment = answerComment;
  }

  getPrivacyPolicy(): PrivacyPolicy {
    return AllowIfViewerHasIdentityPrivacyPolicy;
  }

  getInput(): AnswerCommentInput {
    return {};
  }

  removeAuthor(...ids: ID[]): this;
  removeAuthor(...nodes: User[]): this;
  removeAuthor(...nodes: ID[] | User[]): this {
    nodes.forEach((node) => this.builder.removeAuthor(node));
    return this;
  }
  async changeset(): Promise<Changeset<AnswerComment>> {
    return this.builder.build();
  }

  async valid(): Promise<boolean> {
    return this.builder.valid();
  }

  async validX(): Promise<void> {
    await this.builder.validX();
  }

  async save(): Promise<AnswerComment | null> {
    await this.builder.save();
    return await this.builder.editedEnt();
  }

  async saveX(): Promise<AnswerComment> {
    await this.builder.saveX();
    return await this.builder.editedEntX();
  }

  static create<T extends AnswerCommentRemoveAuthorActionBase>(
    this: new (viewer: Viewer, answerComment: AnswerComment) => T,
    viewer: Viewer,
    answerComment: AnswerComment,
  ): AnswerCommentRemoveAuthorActionBase {
    return new this(viewer, answerComment);
  }

  static async saveXFromID<T extends AnswerCommentRemoveAuthorActionBase>(
    this: new (viewer: Viewer, answerComment: AnswerComment) => T,
    viewer: Viewer,
    id: ID,
    authorID: ID,
  ): Promise<AnswerComment> {
    let answerComment = await AnswerComment.loadX(viewer, id);
    return await new this(viewer, answerComment).removeAuthor(authorID).saveX();
  }
}
