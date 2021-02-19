import { SIGNUP_USER, EDIT_USER, SET_USERS, LOGOUT_USER, REMOVE_USER, SIGNIN_USER } from "./ActionTypes";

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    payload: users,
  };
};

export const removeUser = (id) => {
  return {
    type: REMOVE_USER,
    payload: id,
  };
};

export const signUp = (user) => {
  return {
    type: SIGNUP_USER,
    payload: user,
  };
};

export const editUser = (user) => {
  return {
    type: EDIT_USER,
    payload: user,
  };
};

export const signIn = (user) => {
  return {
    type: SIGNIN_USER,
    payload: user,
  };
};
export const logOut = () => {
  return {
    type: LOGOUT_USER,
  };
};

export default { setUsers, removeUser, signUp, editUser, signIn, logOut };
