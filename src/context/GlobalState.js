import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import actions from "./Actions";

// Initial State
const initialState = {
  users: [],
  loggedInUser: null,
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [{ users, loggedInUser }, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ users, loggedInUser, dispatch, ...actions }}>{children}</GlobalContext.Provider>
  );
};
