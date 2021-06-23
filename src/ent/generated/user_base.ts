// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import {
  AllowIfViewerPrivacyPolicy,
  AssocEdge,
  Context,
  Data,
  ID,
  LoadEntOptions,
  ObjectLoaderFactory,
  PrivacyPolicy,
  Viewer,
  loadEnt,
  loadEntViaKey,
  loadEntX,
  loadEntXViaKey,
  loadEnts,
} from "@lolopinto/ent";
import { Field, getFields } from "@lolopinto/ent/schema";
import {
  EdgeType,
  NodeType,
  UserToAuthorToAuthoredAnswerCommentsQuery,
  UserToAuthorToAuthoredAnswersQuery,
  UserToAuthorToAuthoredQuestionCommentsQuery,
  UserToAuthorToAuthoredQuestionsQuery,
  UserToAuthoredAnswerCommentsQuery,
  UserToAuthoredAnswersQuery,
  UserToAuthoredQuestionCommentsQuery,
  UserToAuthoredQuestionsQuery,
} from "src/ent/internal";
import schema from "src/schema/user";

const tableName = "users";
const fields = [
  "id",
  "created_at",
  "updated_at",
  "first_name",
  "last_name",
  "email_address",
  "password",
];

export class UserBase {
  readonly nodeType = NodeType.User;
  readonly id: ID;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly firstName: string;
  readonly lastName: string;
  readonly emailAddress: string;
  protected readonly password: string;

  constructor(public viewer: Viewer, data: Data) {
    this.id = data.id;
    this.createdAt = data.created_at;
    this.updatedAt = data.updated_at;
    this.firstName = data.first_name;
    this.lastName = data.last_name;
    this.emailAddress = data.email_address;
    this.password = data.password;
  }

  // default privacyPolicy is Viewer can see themselves
  privacyPolicy: PrivacyPolicy = AllowIfViewerPrivacyPolicy;

  static async load<T extends UserBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    id: ID,
  ): Promise<T | null> {
    return loadEnt(viewer, id, UserBase.loaderOptions.apply(this));
  }

  static async loadX<T extends UserBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    id: ID,
  ): Promise<T> {
    return loadEntX(viewer, id, UserBase.loaderOptions.apply(this));
  }

  static async loadMany<T extends UserBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    ...ids: ID[]
  ): Promise<T[]> {
    return loadEnts(viewer, UserBase.loaderOptions.apply(this), ...ids);
  }

  static async loadRawData<T extends UserBase>(
    this: new (viewer: Viewer, data: Data) => T,
    id: ID,
    context?: Context,
  ): Promise<Data | null> {
    return await userLoader.createLoader(context).load(id);
  }

  static async loadRawDataX<T extends UserBase>(
    this: new (viewer: Viewer, data: Data) => T,
    id: ID,
    context?: Context,
  ): Promise<Data> {
    const row = await userLoader.createLoader(context).load(id);
    if (!row) {
      throw new Error(`couldn't load row for ${id}`);
    }
    return row;
  }

  static async loadFromEmailAddress<T extends UserBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    emailAddress: string,
  ): Promise<T | null> {
    return loadEntViaKey(viewer, emailAddress, {
      ...UserBase.loaderOptions.apply(this),
      loaderFactory: userEmailAddressLoader,
    });
  }

  static async loadFromEmailAddressX<T extends UserBase>(
    this: new (viewer: Viewer, data: Data) => T,
    viewer: Viewer,
    emailAddress: string,
  ): Promise<T> {
    return loadEntXViaKey(viewer, emailAddress, {
      ...UserBase.loaderOptions.apply(this),
      loaderFactory: userEmailAddressLoader,
    });
  }

  static async loadIDFromEmailAddress<T extends UserBase>(
    this: new (viewer: Viewer, data: Data) => T,
    emailAddress: string,
    context?: Context,
  ): Promise<ID | undefined> {
    const row = await userEmailAddressLoader
      .createLoader(context)
      .load(emailAddress);
    return row?.id;
  }

  static async loadRawDataFromEmailAddress<T extends UserBase>(
    this: new (viewer: Viewer, data: Data) => T,
    emailAddress: string,
    context?: Context,
  ): Promise<Data | null> {
    return await userEmailAddressLoader
      .createLoader(context)
      .load(emailAddress);
  }

  static loaderOptions<T extends UserBase>(
    this: new (viewer: Viewer, data: Data) => T,
  ): LoadEntOptions<T> {
    return {
      tableName: tableName,
      fields: fields,
      ent: this,
      loaderFactory: userLoader,
    };
  }

  private static schemaFields: Map<string, Field>;

  private static getSchemaFields(): Map<string, Field> {
    if (UserBase.schemaFields != null) {
      return UserBase.schemaFields;
    }
    return (UserBase.schemaFields = getFields(schema));
  }

  static getField(key: string): Field | undefined {
    return UserBase.getSchemaFields().get(key);
  }

  queryAuthorToAuthoredAnswerComments(): UserToAuthorToAuthoredAnswerCommentsQuery {
    return UserToAuthorToAuthoredAnswerCommentsQuery.query(
      this.viewer,
      this.id,
    );
  }

  queryAuthorToAuthoredAnswers(): UserToAuthorToAuthoredAnswersQuery {
    return UserToAuthorToAuthoredAnswersQuery.query(this.viewer, this.id);
  }

  queryAuthorToAuthoredQuestionComments(): UserToAuthorToAuthoredQuestionCommentsQuery {
    return UserToAuthorToAuthoredQuestionCommentsQuery.query(
      this.viewer,
      this.id,
    );
  }

  queryAuthorToAuthoredQuestions(): UserToAuthorToAuthoredQuestionsQuery {
    return UserToAuthorToAuthoredQuestionsQuery.query(this.viewer, this.id);
  }

  queryAuthoredAnswerComments(): UserToAuthoredAnswerCommentsQuery {
    return UserToAuthoredAnswerCommentsQuery.query(this.viewer, this.id);
  }

  queryAuthoredAnswers(): UserToAuthoredAnswersQuery {
    return UserToAuthoredAnswersQuery.query(this.viewer, this.id);
  }

  queryAuthoredQuestionComments(): UserToAuthoredQuestionCommentsQuery {
    return UserToAuthoredQuestionCommentsQuery.query(this.viewer, this.id);
  }

  queryAuthoredQuestions(): UserToAuthoredQuestionsQuery {
    return UserToAuthoredQuestionsQuery.query(this.viewer, this.id);
  }
}

export const userLoader = new ObjectLoaderFactory({
  tableName,
  fields,
  key: "id",
});

export const userEmailAddressLoader = new ObjectLoaderFactory({
  tableName,
  fields,
  key: "email_address",
});

userLoader.addToPrime(userEmailAddressLoader);
userEmailAddressLoader.addToPrime(userLoader);
