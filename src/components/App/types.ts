import { ApolloError } from "@apollo/client";

export interface Character {
  name: string;
  id: number | string;
  image: string;
}

export interface AppState {
  loading: boolean;
  error: ApolloError | undefined;
  characters: Character[];
  removedCharacters: Character[];
  rick: Character | undefined;
  morty: Character | undefined;
}

export enum TypeAppAction {
  updateCharacters = "UPDATE_CHARACTERS",
  deleteCharacter = "DELETE_CHARACTER",
  addMember = "ADD_MEMBER",
  loading = "LOADING",
  error = "ERROR",
}

export interface LoadingAction {
  type: TypeAppAction.loading;
  loading: boolean;
}

export interface AddMember {
  type: TypeAppAction.addMember;
  character: Character;
}

export interface DeleteAction {
  type: TypeAppAction.deleteCharacter;
  id: string | number;
}

export interface UpdateCharacters {
  type: TypeAppAction.updateCharacters;
  characters: Character[];
}

export interface ErrorAction {
  type: TypeAppAction.error;
  error: ApolloError;
}

export type Action =
  | LoadingAction
  | DeleteAction
  | UpdateCharacters
  | ErrorAction
  | AddMember;

export interface GetCharcterRes {
  characters: {
    results: Character[];
  };
}

export interface FilterVars {
  name: string;
}
