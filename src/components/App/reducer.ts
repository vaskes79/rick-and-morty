import { Action, AppState, TypeAppAction } from "./types";

export const InitState: AppState = {
  loading: false,
  error: undefined,
  characters: [],
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
      return { ...state, characters: action.characters };

    case TypeAppAction.deleteCharacter:
      const { id } = action;
      const characters = state.characters.filter(
        (character) => character.id !== id
      );
      return { ...state, characters };

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
