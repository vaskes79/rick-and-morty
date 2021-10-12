import { Action, AppState, TypeAppAction } from "./types";

export const InitState: AppState = {
  loading: false,
  error: {},
  characters: [],
  rickMemebers: [],
  mortyMemebers: [],
};

export const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case TypeAppAction.loading:
      const { loading } = action;
      return { ...state, loading };

    case TypeAppAction.deleteCharacter:
      const { id } = action;
      const { characters: oldCharacters } = state;
      const characters = oldCharacters.filter(
        (character) => character.id !== id
      );
      return { ...state, characters };
  }
};
