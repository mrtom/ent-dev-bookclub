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
import { Question, User } from "src/ent/";
import {
  QuestionBuilder,
  QuestionInput,
} from "src/ent/question/actions/question_builder";

export interface QuestionEditInput {
  title?: string;
  questionBody?: string;
  answered?: boolean;
  authorID?: ID | Builder<User>;
}

export class EditQuestionActionBase implements Action<Question> {
  public readonly builder: QuestionBuilder;
  public readonly viewer: Viewer;
  protected input: QuestionEditInput;
  protected question: Question;

  constructor(viewer: Viewer, question: Question, input: QuestionEditInput) {
    this.viewer = viewer;
    this.input = input;
    this.builder = new QuestionBuilder(
      this.viewer,
      WriteOperation.Edit,
      this,
      question,
    );
    this.question = question;
  }

  getPrivacyPolicy(): PrivacyPolicy {
    return AllowIfViewerHasIdentityPrivacyPolicy;
  }

  getInput(): QuestionInput {
    return this.input;
  }

  async changeset(): Promise<Changeset<Question>> {
    return this.builder.build();
  }

  async valid(): Promise<boolean> {
    return this.builder.valid();
  }

  async validX(): Promise<void> {
    await this.builder.validX();
  }

  async save(): Promise<Question | null> {
    await this.builder.save();
    return await this.builder.editedEnt();
  }

  async saveX(): Promise<Question> {
    await this.builder.saveX();
    return await this.builder.editedEntX();
  }

  static create<T extends EditQuestionActionBase>(
    this: new (
      viewer: Viewer,
      question: Question,
      input: QuestionEditInput,
    ) => T,
    viewer: Viewer,
    question: Question,
    input: QuestionEditInput,
  ): EditQuestionActionBase {
    return new this(viewer, question, input);
  }

  static async saveXFromID<T extends EditQuestionActionBase>(
    this: new (
      viewer: Viewer,
      question: Question,
      input: QuestionEditInput,
    ) => T,
    viewer: Viewer,
    id: ID,
    input: QuestionEditInput,
  ): Promise<Question> {
    let question = await Question.loadX(viewer, id);
    return await new this(viewer, question, input).saveX();
  }
}
