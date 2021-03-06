import { useReducer } from "react";
import { InitState, reducer } from "./reducer";
import { renderHook, act } from "@testing-library/react-hooks/pure";
import { TypeAppAction } from "./types";
import { ApolloError } from "@apollo/client";

describe("The App Reducer", () => {
  const { result } = renderHook(() => useReducer(reducer, InitState));
  const [state, dispatch] = result.current;

  describe("Default state value", () => {
    test("loading is false", () => {
      expect(state.loading).toBeFalsy();
    });

    test("error is undefined", () => {
      expect(state.error).toBeUndefined();
    });

    test("character is []", () => {
      expect(state.characters).toEqual([]);
    });

    test("removedCharcters is []", () => {
      expect(state.removedCharacters).toEqual([]);
    });

    test("rick is undefined", () => {
      expect(state.rick).toBeUndefined();
    });

    test("morty is undefined", () => {
      expect(state.morty).toBeUndefined();
    });
  });

  describe("Actions", () => {
    const characters = [
      {
        id: "1",
        name: "rick",
        image: "url1",
      },
      {
        id: "2",
        name: "morty",
        image: "url2",
      },
    ];

    describe("Loading", () => {
      test("loading is true", () => {
        act(() => {
          dispatch({ type: TypeAppAction.loading, loading: true });
        });
        const [state] = result.current;
        expect(state.loading).toBeTruthy();
      });

      test("loading is false", () => {
        act(() => {
          dispatch({ type: TypeAppAction.loading, loading: false });
        });
        const [state] = result.current;
        expect(state.loading).toBeFalsy();
      });
    });

    describe("Update characters", () => {
      test("check update and delete charactes state", () => {
        act(() => {
          dispatch({ type: TypeAppAction.updateCharacters, characters });
        });
        const [state] = result.current;
        expect(state.characters).toHaveLength(2);
      });
    });

    describe("Delete character", () => {
      test("check delete character", () => {
        act(() => {
          dispatch({ type: TypeAppAction.deleteCharacter, id: "1" });
        });
        const [state] = result.current;
        expect(state.characters).toHaveLength(1);
        expect(state.removedCharacters).toHaveLength(1);
      });
    });

    describe("Error handling", () => {
      const error = {
        message: "Error message",
      } as ApolloError;

      test("change error message", () => {
        act(() => {
          dispatch({ type: TypeAppAction.error, error });
        });
        const [state] = result.current;
        expect(state.error?.message).toEqual("Error message");
      });
    });

    describe("Add member to paty room", () => {
      const [rick, morty] = characters;

      test("add rick to party room", () => {
        act(() => {
          dispatch({ type: TypeAppAction.addMember, character: rick });
        });
        const [state] = result.current;
        expect(state.rick?.name).toEqual(rick.name);
      });

      test("add morty to party room", () => {
        act(() => {
          dispatch({ type: TypeAppAction.addMember, character: morty });
        });
        const [state] = result.current;
        expect(state.morty?.name).toEqual(morty.name);
      });
    });
  });
});
