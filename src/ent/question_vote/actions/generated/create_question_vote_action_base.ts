// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  AllowIfViewerHasIdentityPrivacyPolicy,
  ID,
  PrivacyPolicy,
  Viewer,
} from "@snowtop/ent";
import {
  Action,
  Builder,
  Changeset,
  WriteOperation,
} from "@snowtop/ent/action";
import { Question, QuestionVote, VoteType } from "src/ent/";
import {
  QuestionVoteBuilder,
  QuestionVoteInput,
} from "src/ent/question_vote/actions/question_vote_builder";

export interface QuestionVoteCreateInput {
  voteType: VoteType;
  questionID: ID | Builder<Question>;
}

export class CreateQuestionVoteActionBase implements Action<QuestionVote> {
  public readonly builder: QuestionVoteBuilder;
  public readonly viewer: Viewer;
  protected input: QuestionVoteCreateInput;

  constructor(viewer: Viewer, input: QuestionVoteCreateInput) {
    this.viewer = viewer;
    this.input = input;
    this.builder = new QuestionVoteBuilder(
      this.viewer,
      WriteOperation.Insert,
      this,
    );
  }

  getPrivacyPolicy(): PrivacyPolicy {
    return AllowIfViewerHasIdentityPrivacyPolicy;
  }

  getInput(): QuestionVoteInput {
    return this.input;
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

  async save(): Promise<QuestionVote | null> {
    await this.builder.save();
    return await this.builder.editedEnt();
  }

  async saveX(): Promise<QuestionVote> {
    await this.builder.saveX();
    return await this.builder.editedEntX();
  }

  static create<T extends CreateQuestionVoteActionBase>(
    this: new (viewer: Viewer, input: QuestionVoteCreateInput) => T,
    viewer: Viewer,
    input: QuestionVoteCreateInput,
  ): CreateQuestionVoteActionBase {
    return new this(viewer, input);
  }
}
