// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  AllowIfViewerPrivacyPolicy,
  AssocEdge,
  Context,
  CustomQuery,
  Data,
  ID,
  LoadEntOptions,
  ObjectLoaderFactory,
  PrivacyPolicy,
  Viewer,
  convertDate,
  loadCustomData,
  loadCustomEnts,
  loadEnt,
  loadEntX,
  loadEnts,
} from "@snowtop/ent";
import { Field, getFields } from "@snowtop/ent/schema";
import {
  EdgeType,
  NodeType,
  Question,
  QuestionVoteToVotersQuery,
  User,
} from "src/ent/internal";
import schema from "src/schema/question_vote";

const tableName = "question_votes";
const fields = [
  "id",
  "created_at",
  "updated_at",
  "vote_type",
  "question_id",
  "user_id",
];

export enum VoteType {
  Up = "up",
  Down = "down",
}

export function getVoteTypeValues() {
  return [VoteType.Up, VoteType.Down];
}

export class QuestionVoteBase {
  readonly nodeType = NodeType.QuestionVote;
  readonly id: ID;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly voteType: VoteType;
  readonly questionID: ID;
  readonly voterID: ID;

  constructor(public viewer: Viewer, data: Data) {
    this.id = data.id;
    this.createdAt = convertDate(data.created_at);
    this.updatedAt = convertDate(data.updated_at);
    this.voteType = data.vote_type;
    this.questionID = data.question_id;
    this.voterID = data.user_id;
  }

  // default privacyPolicy is Viewer can see themselves
  privacyPolicy: PrivacyPolicy = AllowIfViewerPrivacyPolicy;

  static async load<T extends QuestionVoteBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    id: ID,
  ): Promise<T | null> {
    return loadEnt(viewer, id, QuestionVoteBase.loaderOptions.apply(this));
  }

  static async loadX<T extends QuestionVoteBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    id: ID,
  ): Promise<T> {
    return loadEntX(viewer, id, QuestionVoteBase.loaderOptions.apply(this));
  }

  static async loadMany<T extends QuestionVoteBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    ...ids: ID[]
  ): Promise<T[]> {
    return loadEnts(viewer, QuestionVoteBase.loaderOptions.apply(this), ...ids);
  }

  static async loadCustom<T extends QuestionVoteBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    query: CustomQuery,
  ): Promise<T[]> {
    return loadCustomEnts(
      viewer,
      QuestionVoteBase.loaderOptions.apply(this),
      query,
    );
  }

  static async loadCustomData<T extends QuestionVoteBase>(
    this: new (viewer: Viewer, data: Data) => T,
    query: CustomQuery,
    context?: Context,
  ): Promise<Data[]> {
    return loadCustomData(
      QuestionVoteBase.loaderOptions.apply(this),
      query,
      context,
    );
  }

  static async loadRawData<T extends QuestionVoteBase>(
    this: new (viewer: Viewer, data: Data) => T,
    id: ID,
    context?: Context,
  ): Promise<Data | null> {
    return await questionVoteLoader.createLoader(context).load(id);
  }

  static async loadRawDataX<T extends QuestionVoteBase>(
    this: new (viewer: Viewer, data: Data) => T,
    id: ID,
    context?: Context,
  ): Promise<Data> {
    const row = await questionVoteLoader.createLoader(context).load(id);
    if (!row) {
      throw new Error(`couldn't load row for ${id}`);
    }
    return row;
  }

  static loaderOptions<T extends QuestionVoteBase>(
    this: new (viewer: Viewer, data: Data) => T,
  ): LoadEntOptions<T> {
    return {
      tableName: tableName,
      fields: fields,
      ent: this,
      loaderFactory: questionVoteLoader,
    };
  }

  private static schemaFields: Map<string, Field>;

  private static getSchemaFields(): Map<string, Field> {
    if (QuestionVoteBase.schemaFields != null) {
      return QuestionVoteBase.schemaFields;
    }
    return (QuestionVoteBase.schemaFields = getFields(schema));
  }

  static getField(key: string): Field | undefined {
    return QuestionVoteBase.getSchemaFields().get(key);
  }

  queryVoters(): QuestionVoteToVotersQuery {
    return QuestionVoteToVotersQuery.query(this.viewer, this.id);
  }

  async loadQuestion(): Promise<Question | null> {
    return loadEnt(this.viewer, this.questionID, Question.loaderOptions());
  }

  loadQuestionX(): Promise<Question> {
    return loadEntX(this.viewer, this.questionID, Question.loaderOptions());
  }

  async loadVoter(): Promise<User | null> {
    return loadEnt(this.viewer, this.voterID, User.loaderOptions());
  }

  loadVoterX(): Promise<User> {
    return loadEntX(this.viewer, this.voterID, User.loaderOptions());
  }
}

export const questionVoteLoader = new ObjectLoaderFactory({
  tableName,
  fields,
  key: "id",
});
