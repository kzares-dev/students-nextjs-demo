"use client";
import React, { Dispatch, createContext, useReducer } from "react";
import { CreateStudentModal } from "@/components";
import { StudentType } from "./types";

// Types for the state and actions
type StateType = {
  isOpen: boolean; // Modal state (open or closed)
  student?: StudentType;

};

type ActionType = {
  type: "TOGGLE_MODAL" | "EDIT_STUDENT"; // Action type
  student?: StudentType;
};

// Initial state
const initialState: StateType = {
  isOpen: false, // Modal starts closed
};

// Reducer to handle the modal state
const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "TOGGLE_MODAL":
      return { ...state, isOpen: !state.isOpen, student: {} }; // Toggle modal state & set the student to empty
    case "EDIT_STUDENT":
      return { ...state, isOpen: !state.isOpen, student: action.student };
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
  const isEditing = state.student?.firstName? true : false

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {state.isOpen && <CreateStudentModal student={state.student} edit={isEditing} />}
      {children}
    </ModalContext.Provider>
  );
};
