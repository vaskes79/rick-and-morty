import { Action, AppState, TypeAppAction } from "./types";
import differenceBy from "lodash/differenceBy";

export const InitState: AppState = {
  loading: false,
  error: undefined,
  characters: [],
  removedCharacters: [],
  rick: undefined,
  morty: undefined,
};

const rickRegex = /rick/gi;
const mortyRegex = /morty/gi;

export const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case TypeAppAction.loading:
      let { loading } = action;
      return { ...state, loading };

    case TypeAppAction.updateCharacters:
      const diff = differenceBy(
        action.characters,
        state.removedCharacters,
        "id"
      );
      return { ...state, characters: diff };

    case TypeAppAction.deleteCharacter:
      const { id } = action;
      const removeCharacter = state.characters.filter(
        (character) => character.id === id
      );
      const characters = state.characters.filter(
        (character) => character.id !== id
      );

      let removedCharacters = [...state.removedCharacters, ...removeCharacter];
      return { ...state, characters, removedCharacters };

    case TypeAppAction.error:
      return { ...state, error: action.error };

    case TypeAppAction.addMember:
      const { character } = action;
      if (rickRegex.test(character.name)) {
        return { ...state, rick: character };
      }

      if (mortyRegex.test(character.name)) {
        return { ...state, morty: character };
      }
      return state;

    default:
      return state;
  }
};
