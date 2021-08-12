// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  AllowIfViewerHasIdentityPrivacyPolicy,
  ID,
  PrivacyPolicy,
  Viewer,
} from "@snowtop/ent";
import { Action, Changeset, WriteOperation } from "@snowtop/ent/action";
import { QuestionVote } from "src/ent/";
import {
  QuestionVoteBuilder,
  QuestionVoteInput,
} from "src/ent/question_vote/actions/question_vote_builder";

export class DeleteQuestionVoteActionBase implements Action<QuestionVote> {
  public readonly builder: QuestionVoteBuilder;
  public readonly viewer: Viewer;
  protected questionVote: QuestionVote;

  constructor(viewer: Viewer, questionVote: QuestionVote) {
    this.viewer = viewer;
    this.builder = new QuestionVoteBuilder(
      this.viewer,
      WriteOperation.Delete,
      this,
      questionVote,
    );
    this.questionVote = questionVote;
  }

  getPrivacyPolicy(): PrivacyPolicy {
    return AllowIfViewerHasIdentityPrivacyPolicy;
  }

  getInput(): QuestionVoteInput {
    return {};
  }

  async changeset(): Promise<Changeset<QuestionVote>> {
    return this.builder.build();
  }

  async valid(): Promise<boolean> {
    return this.builder.valid();
  }

  async validX(): Promise<void> {
    await this.builder.validX();
  }

  async save(): Promise<void> {
    await this.builder.save();
  }

  async saveX(): Promise<void> {
    await this.builder.saveX();
  }

  static create<T extends DeleteQuestionVoteActionBase>(
    this: new (viewer: Viewer, questionVote: QuestionVote) => T,
    viewer: Viewer,
    questionVote: QuestionVote,
  ): DeleteQuestionVoteActionBase {
    return new this(viewer, questionVote);
  }

  static async saveXFromID<T extends DeleteQuestionVoteActionBase>(
    this: new (viewer: Viewer, questionVote: QuestionVote) => T,
    viewer: Viewer,
    id: ID,
  ): Promise<void> {
    let questionVote = await QuestionVote.loadX(viewer, id);
    return await new this(viewer, questionVote).saveX();
  }
}
