'use client';
import CreateStudentModal from "@/components/CreateStudentModal";
import React, { Dispatch, createContext, useReducer } from "react";

// Types for the state and actions
type StateType = {
  isOpen: boolean; // Modal state (open or closed)
};

type ActionType = {
  type: "TOGGLE_MODAL"; // Action type
};

// Initial state
const initialState: StateType = {
  isOpen: false, // Modal starts closed
};

// Reducer to handle the modal state
const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "TOGGLE_MODAL":
      return { ...state, isOpen: !state.isOpen }; // Toggle modal state
    default:
      return state;
  }
};

// Create the context
export const ModalContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

// Context provider component
export const ModalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
     {state.isOpen &&  <CreateStudentModal />}
      {children}
    </ModalContext.Provider>
  );
};
