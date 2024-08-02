"use client";
import React, { Dispatch, createContext, useReducer } from "react";

// Types for the state and actions
type StateType = {
  isRefreshing: boolean;
};

type ActionType = {
  type: "REFRESH";
};

const initialState: StateType = {
  isRefreshing: true,
};

// Reducer to handle the modal state
const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "REFRESH":
      return { ...state, isRefreshing: !state.isRefreshing };
    default:
      return state;
  }
};

// Create the context
export const RefreshContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

// Context provider component
export const RefreshContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <RefreshContext.Provider value={{ state, dispatch }}>
      {children}
    </RefreshContext.Provider>
  );
};
