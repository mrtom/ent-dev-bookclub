// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  AllowIfViewerHasIdentityPrivacyPolicy,
  ID,
  PrivacyPolicy,
  Viewer,
} from "@snowtop/ent";
import { Action, Changeset, WriteOperation } from "@snowtop/ent/action";
import { QuestionVote, User } from "src/ent/";
import {
  QuestionVoteBuilder,
  QuestionVoteInput,
} from "src/ent/question_vote/actions/question_vote_builder";

export class QuestionVoteRemoveVoterActionBase implements Action<QuestionVote> {
  public readonly builder: QuestionVoteBuilder;
  public readonly viewer: Viewer;
  protected questionVote: QuestionVote;

  constructor(viewer: Viewer, questionVote: QuestionVote) {
    this.viewer = viewer;
    this.builder = new QuestionVoteBuilder(
      this.viewer,
      WriteOperation.Edit,
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

  removeVoter(...ids: ID[]): this;
  removeVoter(...nodes: User[]): this;
  removeVoter(...nodes: ID[] | User[]): this {
    nodes.forEach((node) => this.builder.removeVoter(node));
    return this;
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

  static create<T extends QuestionVoteRemoveVoterActionBase>(
    this: new (viewer: Viewer, questionVote: QuestionVote) => T,
    viewer: Viewer,
    questionVote: QuestionVote,
  ): QuestionVoteRemoveVoterActionBase {
    return new this(viewer, questionVote);
  }

  static async saveXFromID<T extends QuestionVoteRemoveVoterActionBase>(
    this: new (viewer: Viewer, questionVote: QuestionVote) => T,
    viewer: Viewer,
    id: ID,
    voterID: ID,
  ): Promise<QuestionVote> {
    let questionVote = await QuestionVote.loadX(viewer, id);
    return await new this(viewer, questionVote).removeVoter(voterID).saveX();
  }
}
