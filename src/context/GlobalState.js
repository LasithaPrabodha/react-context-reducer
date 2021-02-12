import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import actions from "./Actions";

// Initial State
const initialState = {
  users: [],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [{ users }, dispatch] = useReducer(AppReducer, initialState);

  return <GlobalContext.Provider value={{ users, dispatch, ...actions }}>{children}</GlobalContext.Provider>;
};
