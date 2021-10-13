import { useReducer } from "react";
import { InitState, reducer } from "./reducer";
import { renderHook } from "@testing-library/react-hooks";

describe("The Base app reducer", () => {
  const { result } = renderHook(() => useReducer(reducer, InitState));
  const [state] = result.current;

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
});
