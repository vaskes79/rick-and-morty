import { createContext, Dispatch } from "react";
import { useReducer, FC } from "react";
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
