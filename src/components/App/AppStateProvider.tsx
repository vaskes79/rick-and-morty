import { useReducer, FC, useContext, createContext, Dispatch } from "react";
import { AppState, Action } from "./types";
import { InitState, reducer } from "./reducer";

export const AppStateContext = createContext<AppState | undefined>(undefined);
export const AppDispatchContext = createContext<Dispatch<Action> | undefined>(
  undefined
);

AppStateContext.displayName = "AppStateContext";
AppDispatchContext.displayName = "AppDispatchContext";

export const AppStateProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, InitState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export const useAppDispatch = () => {
  const dispatch = useContext(AppDispatchContext)!;

  if (dispatch === undefined) {
    throw new Error("useAppDispatch must be used with a AppStateProvider");
  }

  return (action: Action) => {
    dispatch(action);
  };
};

export const useAppState = () => {
  const state = useContext(AppStateContext)!;

  if (state === undefined) {
    throw new Error("useAppState must be used with a AppStateProvider");
  }

  return state;
};
