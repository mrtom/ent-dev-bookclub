// Generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

import { AssocEdgeInputOptions, Ent, ID, Viewer } from "@lolopinto/ent";
import {
  Action,
  Builder,
  Changeset,
  Orchestrator,
  WriteOperation,
  saveBuilder,
  saveBuilderX,
} from "@lolopinto/ent/action";
import {
  Answer,
  AnswerComment,
  Question,
  QuestionComment,
  QuestionPrivateNote,
  User,
} from "src/ent/";
import { EdgeType, NodeType } from "src/ent/const";
import schema from "src/schema/user";

export interface UserInput {
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
  password?: string;
}

export interface UserAction extends Action<User> {
  getInput(): UserInput;
}

function randomNum(): string {
  return Math.random().toString(10).substring(2);
}

export class UserBuilder implements Builder<User> {
  orchestrator: Orchestrator<User>;
  readonly placeholderID: ID;
  readonly ent = User;
  private input: UserInput;

  public constructor(
    public readonly viewer: Viewer,
    public readonly operation: WriteOperation,
    action: UserAction,
    public readonly existingEnt?: User | undefined,
  ) {
    this.placeholderID = `$ent.idPlaceholderID$ ${randomNum()}-User`;
    this.input = action.getInput();

    this.orchestrator = new Orchestrator({
      viewer: viewer,
      operation: this.operation,
      tableName: "users",
      key: "id",
      loaderOptions: User.loaderOptions(),
      builder: this,
      action: action,
      schema: schema,
      editedFields: () => {
        return this.getEditedFields.apply(this);
      },
    });
  }

  getInput(): UserInput {
    return this.input;
  }

  updateInput(input: UserInput) {
    // override input
    this.input = {
      ...this.input,
      ...input,
    };
  }

  // this gets the inputs that have been written for a given edgeType and operation
  // WriteOperation.Insert for adding an edge and WriteOperation.Delete for deleting an edge
  getEdgeInputData(edgeType: EdgeType, op: WriteOperation) {
    return this.orchestrator.getInputEdges(edgeType, op);
  }

  clearInputEdges(edgeType: EdgeType, op: WriteOperation, id?: ID) {
    this.orchestrator.clearInputEdges(edgeType, op, id);
  }
  addAuthorToAuthoredAnswerComment(...ids: ID[]): UserBuilder;
  addAuthorToAuthoredAnswerComment(...nodes: AnswerComment[]): UserBuilder;
  addAuthorToAuthoredAnswerComment(
    ...nodes: Builder<AnswerComment>[]
  ): UserBuilder;
  addAuthorToAuthoredAnswerComment(
    ...nodes: ID[] | AnswerComment[] | Builder<AnswerComment>[]
  ): UserBuilder {
    for (const node of nodes) {
      if (this.isBuilder(node)) {
        this.addAuthorToAuthoredAnswerCommentID(node);
      } else if (typeof node === "object") {
        this.addAuthorToAuthoredAnswerCommentID(node.id);
      } else {
        this.addAuthorToAuthoredAnswerCommentID(node);
      }
    }
    return this;
  }

  addAuthorToAuthoredAnswerCommentID(
    id: ID | Builder<AnswerComment>,
    options?: AssocEdgeInputOptions,
  ): UserBuilder {
    this.orchestrator.addOutboundEdge(
      id,
      EdgeType.UserToAuthorToAuthoredAnswerComments,
      NodeType.AnswerComment,
      options,
    );
    return this;
  }

  removeAuthorToAuthoredAnswerComment(...ids: ID[]): UserBuilder;
  removeAuthorToAuthoredAnswerComment(...nodes: AnswerComment[]): UserBuilder;
  removeAuthorToAuthoredAnswerComment(
    ...nodes: ID[] | AnswerComment[]
  ): UserBuilder {
    for (const node of nodes) {
      if (typeof node === "object") {
        this.orchestrator.removeOutboundEdge(
          node.id,
          EdgeType.UserToAuthorToAuthoredAnswerComments,
        );
      } else {
        this.orchestrator.removeOutboundEdge(
          node,
          EdgeType.UserToAuthorToAuthoredAnswerComments,
        );
      }
    }
    return this;
  }

  addAuthorToAuthoredAnswer(...ids: ID[]): UserBuilder;
  addAuthorToAuthoredAnswer(...nodes: Answer[]): UserBuilder;
  addAuthorToAuthoredAnswer(...nodes: Builder<Answer>[]): UserBuilder;
  addAuthorToAuthoredAnswer(
    ...nodes: ID[] | Answer[] | Builder<Answer>[]
  ): UserBuilder {
    for (const node of nodes) {
      if (this.isBuilder(node)) {
        this.addAuthorToAuthoredAnswerID(node);
      } else if (typeof node === "object") {
        this.addAuthorToAuthoredAnswerID(node.id);
      } else {
        this.addAuthorToAuthoredAnswerID(node);
      }
    }
    return this;
  }

  addAuthorToAuthoredAnswerID(
    id: ID | Builder<Answer>,
    options?: AssocEdgeInputOptions,
  ): UserBuilder {
    this.orchestrator.addOutboundEdge(
      id,
      EdgeType.UserToAuthorToAuthoredAnswers,
      NodeType.Answer,
      options,
    );
    return this;
  }

  removeAuthorToAuthoredAnswer(...ids: ID[]): UserBuilder;
  removeAuthorToAuthoredAnswer(...nodes: Answer[]): UserBuilder;
  removeAuthorToAuthoredAnswer(...nodes: ID[] | Answer[]): UserBuilder {
    for (const node of nodes) {
      if (typeof node === "object") {
        this.orchestrator.removeOutboundEdge(
          node.id,
          EdgeType.UserToAuthorToAuthoredAnswers,
        );
      } else {
        this.orchestrator.removeOutboundEdge(
          node,
          EdgeType.UserToAuthorToAuthoredAnswers,
        );
      }
    }
    return this;
  }

  addAuthorToAuthoredQuestionComment(...ids: ID[]): UserBuilder;
  addAuthorToAuthoredQuestionComment(...nodes: QuestionComment[]): UserBuilder;
  addAuthorToAuthoredQuestionComment(
    ...nodes: Builder<QuestionComment>[]
  ): UserBuilder;
  addAuthorToAuthoredQuestionComment(
    ...nodes: ID[] | QuestionComment[] | Builder<QuestionComment>[]
  ): UserBuilder {
    for (const node of nodes) {
      if (this.isBuilder(node)) {
        this.addAuthorToAuthoredQuestionCommentID(node);
      } else if (typeof node === "object") {
        this.addAuthorToAuthoredQuestionCommentID(node.id);
      } else {
        this.addAuthorToAuthoredQuestionCommentID(node);
      }
    }
    return this;
  }

  addAuthorToAuthoredQuestionCommentID(
    id: ID | Builder<QuestionComment>,
    options?: AssocEdgeInputOptions,
  ): UserBuilder {
    this.orchestrator.addOutboundEdge(
      id,
      EdgeType.UserToAuthorToAuthoredQuestionComments,
      NodeType.QuestionComment,
      options,
    );
    return this;
  }

  removeAuthorToAuthoredQuestionComment(...ids: ID[]): UserBuilder;
  removeAuthorToAuthoredQuestionComment(
    ...nodes: QuestionComment[]
  ): UserBuilder;
  removeAuthorToAuthoredQuestionComment(
    ...nodes: ID[] | QuestionComment[]
  ): UserBuilder {
    for (const node of nodes) {
      if (typeof node === "object") {
        this.orchestrator.removeOutboundEdge(
          node.id,
          EdgeType.UserToAuthorToAuthoredQuestionComments,
        );
      } else {
        this.orchestrator.removeOutboundEdge(
          node,
          EdgeType.UserToAuthorToAuthoredQuestionComments,
        );
      }
    }
    return this;
  }

  addAuthorToAuthoredQuestion(...ids: ID[]): UserBuilder;
  addAuthorToAuthoredQuestion(...nodes: Question[]): UserBuilder;
  addAuthorToAuthoredQuestion(...nodes: Builder<Question>[]): UserBuilder;
  addAuthorToAuthoredQuestion(
    ...nodes: ID[] | Question[] | Builder<Question>[]
  ): UserBuilder {
    for (const node of nodes) {
      if (this.isBuilder(node)) {
        this.addAuthorToAuthoredQuestionID(node);
      } else if (typeof node === "object") {
        this.addAuthorToAuthoredQuestionID(node.id);
      } else {
        this.addAuthorToAuthoredQuestionID(node);
      }
    }
    return this;
  }

  addAuthorToAuthoredQuestionID(
    id: ID | Builder<Question>,
    options?: AssocEdgeInputOptions,
  ): UserBuilder {
    this.orchestrator.addOutboundEdge(
      id,
      EdgeType.UserToAuthorToAuthoredQuestions,
      NodeType.Question,
      options,
    );
    return this;
  }

  removeAuthorToAuthoredQuestion(...ids: ID[]): UserBuilder;
  removeAuthorToAuthoredQuestion(...nodes: Question[]): UserBuilder;
  removeAuthorToAuthoredQuestion(...nodes: ID[] | Question[]): UserBuilder {
    for (const node of nodes) {
      if (typeof node === "object") {
        this.orchestrator.removeOutboundEdge(
          node.id,
          EdgeType.UserToAuthorToAuthoredQuestions,
        );
      } else {
        this.orchestrator.removeOutboundEdge(
          node,
          EdgeType.UserToAuthorToAuthoredQuestions,
        );
      }
    }
    return this;
  }

  addAuthoredAnswerComment(...ids: ID[]): UserBuilder;
  addAuthoredAnswerComment(...nodes: AnswerComment[]): UserBuilder;
  addAuthoredAnswerComment(...nodes: Builder<AnswerComment>[]): UserBuilder;
  addAuthoredAnswerComment(
    ...nodes: ID[] | AnswerComment[] | Builder<AnswerComment>[]
  ): UserBuilder {
    for (const node of nodes) {
      if (this.isBuilder(node)) {
        this.addAuthoredAnswerCommentID(node);
      } else if (typeof node === "object") {
        this.addAuthoredAnswerCommentID(node.id);
      } else {
        this.addAuthoredAnswerCommentID(node);
      }
    }
    return this;
  }

  addAuthoredAnswerCommentID(
    id: ID | Builder<AnswerComment>,
    options?: AssocEdgeInputOptions,
  ): UserBuilder {
    this.orchestrator.addOutboundEdge(
      id,
      EdgeType.UserToAuthoredAnswerComments,
      NodeType.AnswerComment,
      options,
    );
    return this;
  }

  removeAuthoredAnswerComment(...ids: ID[]): UserBuilder;
  removeAuthoredAnswerComment(...nodes: AnswerComment[]): UserBuilder;
  removeAuthoredAnswerComment(...nodes: ID[] | AnswerComment[]): UserBuilder {
    for (const node of nodes) {
      if (typeof node === "object") {
        this.orchestrator.removeOutboundEdge(
          node.id,
          EdgeType.UserToAuthoredAnswerComments,
        );
      } else {
        this.orchestrator.removeOutboundEdge(
          node,
          EdgeType.UserToAuthoredAnswerComments,
        );
      }
    }
    return this;
  }

  addAuthoredAnswer(...ids: ID[]): UserBuilder;
  addAuthoredAnswer(...nodes: Answer[]): UserBuilder;
  addAuthoredAnswer(...nodes: Builder<Answer>[]): UserBuilder;
  addAuthoredAnswer(
    ...nodes: ID[] | Answer[] | Builder<Answer>[]
  ): UserBuilder {
    for (const node of nodes) {
      if (this.isBuilder(node)) {
        this.addAuthoredAnswerID(node);
      } else if (typeof node === "object") {
        this.addAuthoredAnswerID(node.id);
      } else {
        this.addAuthoredAnswerID(node);
      }
    }
    return this;
  }

  addAuthoredAnswerID(
    id: ID | Builder<Answer>,
    options?: AssocEdgeInputOptions,
  ): UserBuilder {
    this.orchestrator.addOutboundEdge(
      id,
      EdgeType.UserToAuthoredAnswers,
      NodeType.Answer,
      options,
    );
    return this;
  }

  removeAuthoredAnswer(...ids: ID[]): UserBuilder;
  removeAuthoredAnswer(...nodes: Answer[]): UserBuilder;
  removeAuthoredAnswer(...nodes: ID[] | Answer[]): UserBuilder {
    for (const node of nodes) {
      if (typeof node === "object") {
        this.orchestrator.removeOutboundEdge(
          node.id,
          EdgeType.UserToAuthoredAnswers,
        );
      } else {
        this.orchestrator.removeOutboundEdge(
          node,
          EdgeType.UserToAuthoredAnswers,
        );
      }
    }
    return this;
  }

  addAuthoredQuestionComment(...ids: ID[]): UserBuilder;
  addAuthoredQuestionComment(...nodes: QuestionComment[]): UserBuilder;
  addAuthoredQuestionComment(...nodes: Builder<QuestionComment>[]): UserBuilder;
  addAuthoredQuestionComment(
    ...nodes: ID[] | QuestionComment[] | Builder<QuestionComment>[]
  ): UserBuilder {
    for (const node of nodes) {
      if (this.isBuilder(node)) {
        this.addAuthoredQuestionCommentID(node);
      } else if (typeof node === "object") {
        this.addAuthoredQuestionCommentID(node.id);
      } else {
        this.addAuthoredQuestionCommentID(node);
      }
    }
    return this;
  }

  addAuthoredQuestionCommentID(
    id: ID | Builder<QuestionComment>,
    options?: AssocEdgeInputOptions,
  ): UserBuilder {
    this.orchestrator.addOutboundEdge(
      id,
      EdgeType.UserToAuthoredQuestionComments,
      NodeType.QuestionComment,
      options,
    );
    return this;
  }

  removeAuthoredQuestionComment(...ids: ID[]): UserBuilder;
  removeAuthoredQuestionComment(...nodes: QuestionComment[]): UserBuilder;
  removeAuthoredQuestionComment(
    ...nodes: ID[] | QuestionComment[]
  ): UserBuilder {
    for (const node of nodes) {
      if (typeof node === "object") {
        this.orchestrator.removeOutboundEdge(
          node.id,
          EdgeType.UserToAuthoredQuestionComments,
        );
      } else {
        this.orchestrator.removeOutboundEdge(
          node,
          EdgeType.UserToAuthoredQuestionComments,
        );
      }
    }
    return this;
  }

  addAuthoredQuestion(...ids: ID[]): UserBuilder;
  addAuthoredQuestion(...nodes: Question[]): UserBuilder;
  addAuthoredQuestion(...nodes: Builder<Question>[]): UserBuilder;
  addAuthoredQuestion(
    ...nodes: ID[] | Question[] | Builder<Question>[]
  ): UserBuilder {
    for (const node of nodes) {
      if (this.isBuilder(node)) {
        this.addAuthoredQuestionID(node);
      } else if (typeof node === "object") {
        this.addAuthoredQuestionID(node.id);
      } else {
        this.addAuthoredQuestionID(node);
      }
    }
    return this;
  }

  addAuthoredQuestionID(
    id: ID | Builder<Question>,
    options?: AssocEdgeInputOptions,
  ): UserBuilder {
    this.orchestrator.addOutboundEdge(
      id,
      EdgeType.UserToAuthoredQuestions,
      NodeType.Question,
      options,
    );
    return this;
  }

  removeAuthoredQuestion(...ids: ID[]): UserBuilder;
  removeAuthoredQuestion(...nodes: Question[]): UserBuilder;
  removeAuthoredQuestion(...nodes: ID[] | Question[]): UserBuilder {
    for (const node of nodes) {
      if (typeof node === "object") {
        this.orchestrator.removeOutboundEdge(
          node.id,
          EdgeType.UserToAuthoredQuestions,
        );
      } else {
        this.orchestrator.removeOutboundEdge(
          node,
          EdgeType.UserToAuthoredQuestions,
        );
      }
    }
    return this;
  }

  addQuestionPrivateNote(...ids: ID[]): UserBuilder;
  addQuestionPrivateNote(...nodes: QuestionPrivateNote[]): UserBuilder;
  addQuestionPrivateNote(...nodes: Builder<QuestionPrivateNote>[]): UserBuilder;
  addQuestionPrivateNote(
    ...nodes: ID[] | QuestionPrivateNote[] | Builder<QuestionPrivateNote>[]
  ): UserBuilder {
    for (const node of nodes) {
      if (this.isBuilder(node)) {
        this.addQuestionPrivateNoteID(node);
      } else if (typeof node === "object") {
        this.addQuestionPrivateNoteID(node.id);
      } else {
        this.addQuestionPrivateNoteID(node);
      }
    }
    return this;
  }

  addQuestionPrivateNoteID(
    id: ID | Builder<QuestionPrivateNote>,
    options?: AssocEdgeInputOptions,
  ): UserBuilder {
    this.orchestrator.addOutboundEdge(
      id,
      EdgeType.UserToQuestionPrivateNotes,
      NodeType.QuestionPrivateNote,
      options,
    );
    return this;
  }

  removeQuestionPrivateNote(...ids: ID[]): UserBuilder;
  removeQuestionPrivateNote(...nodes: QuestionPrivateNote[]): UserBuilder;
  removeQuestionPrivateNote(
    ...nodes: ID[] | QuestionPrivateNote[]
  ): UserBuilder {
    for (const node of nodes) {
      if (typeof node === "object") {
        this.orchestrator.removeOutboundEdge(
          node.id,
          EdgeType.UserToQuestionPrivateNotes,
        );
      } else {
        this.orchestrator.removeOutboundEdge(
          node,
          EdgeType.UserToQuestionPrivateNotes,
        );
      }
    }
    return this;
  }

  addUserQuestionPrivateNote(...ids: ID[]): UserBuilder;
  addUserQuestionPrivateNote(...nodes: QuestionPrivateNote[]): UserBuilder;
  addUserQuestionPrivateNote(
    ...nodes: Builder<QuestionPrivateNote>[]
  ): UserBuilder;
  addUserQuestionPrivateNote(
    ...nodes: ID[] | QuestionPrivateNote[] | Builder<QuestionPrivateNote>[]
  ): UserBuilder {
    for (const node of nodes) {
      if (this.isBuilder(node)) {
        this.addUserQuestionPrivateNoteID(node);
      } else if (typeof node === "object") {
        this.addUserQuestionPrivateNoteID(node.id);
      } else {
        this.addUserQuestionPrivateNoteID(node);
      }
    }
    return this;
  }

  addUserQuestionPrivateNoteID(
    id: ID | Builder<QuestionPrivateNote>,
    options?: AssocEdgeInputOptions,
  ): UserBuilder {
    this.orchestrator.addOutboundEdge(
      id,
      EdgeType.UserToUserQuestionPrivateNotes,
      NodeType.QuestionPrivateNote,
      options,
    );
    return this;
  }

  removeUserQuestionPrivateNote(...ids: ID[]): UserBuilder;
  removeUserQuestionPrivateNote(...nodes: QuestionPrivateNote[]): UserBuilder;
  removeUserQuestionPrivateNote(
    ...nodes: ID[] | QuestionPrivateNote[]
  ): UserBuilder {
    for (const node of nodes) {
      if (typeof node === "object") {
        this.orchestrator.removeOutboundEdge(
          node.id,
          EdgeType.UserToUserQuestionPrivateNotes,
        );
      } else {
        this.orchestrator.removeOutboundEdge(
          node,
          EdgeType.UserToUserQuestionPrivateNotes,
        );
      }
    }
    return this;
  }

  async build(): Promise<Changeset<User>> {
    return this.orchestrator.build();
  }

  async valid(): Promise<boolean> {
    return this.orchestrator.valid();
  }

  async validX(): Promise<void> {
    return this.orchestrator.validX();
  }

  async save(): Promise<void> {
    await saveBuilder(this);
  }

  async saveX(): Promise<void> {
    await saveBuilderX(this);
  }

  async editedEnt(): Promise<User | null> {
    return await this.orchestrator.editedEnt();
  }

  async editedEntX(): Promise<User> {
    return await this.orchestrator.editedEntX();
  }

  private getEditedFields(): Map<string, any> {
    const fields = this.input;

    let result = new Map<string, any>();

    const addField = function (key: string, value: any) {
      if (value !== undefined) {
        result.set(key, value);
      }
    };
    addField("FirstName", fields.firstName);
    addField("LastName", fields.lastName);
    addField("EmailAddress", fields.emailAddress);
    addField("Password", fields.password);
    return result;
  }

  isBuilder(node: ID | Ent | Builder<Ent>): node is Builder<Ent> {
    return (node as Builder<Ent>).placeholderID !== undefined;
  }

  // get value of FirstName. Retrieves it from the input if specified or takes it from existingEnt
  getNewFirstNameValue(): string | undefined {
    return this.input.firstName || this.existingEnt?.firstName;
  }

  // get value of LastName. Retrieves it from the input if specified or takes it from existingEnt
  getNewLastNameValue(): string | undefined {
    return this.input.lastName || this.existingEnt?.lastName;
  }

  // get value of EmailAddress. Retrieves it from the input if specified or takes it from existingEnt
  getNewEmailAddressValue(): string | undefined {
    return this.input.emailAddress || this.existingEnt?.emailAddress;
  }

  // get value of Password. Retrieves it from the input if specified or takes it from existingEnt
  getNewPasswordValue(): string | undefined {
    return this.input.password;
  }
}