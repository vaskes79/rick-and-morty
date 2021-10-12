export interface Character {
  name: string;
  id: number | string;
  image: string;
}

export interface AppState {
  loading: boolean;
  error: any;
  characters: Character[];
  rickMemebers: Character[];
  mortyMemebers: Character[];
}

export enum TypeAppAction {
  updateCharacters = "UPDATE_CHARACTERS",
  deleteCharacter = "DELETE_CHARACTER",
  addMember = "ADD_MEMBER",
  loading = "LOADING",
}

export interface LoadingAction {
  type: TypeAppAction.loading;
  loading: boolean;
}

export interface DeleteAction {
  type: TypeAppAction.deleteCharacter;
  id: string | number;
}

export type Action = LoadingAction | DeleteAction;
