import { ADD_USER, EDIT_USER, GET_USERS, REMOVE_USER } from "./ActionTypes";

export const getUsers = () => {
  // fetch() get

  const users = [];
  return {
    type: GET_USERS,
    payload: users,
  };
};

export const removeUser = (id) => {
  // fetch() delete

  return {
    type: REMOVE_USER,
    payload: id,
  };
};

export const addUser = (user) => {
  // fetch() post

  return {
    type: ADD_USER,
    payload: user,
  };
};

export const editUser = (user) => {
  // fetch() post

  return {
    type: EDIT_USER,
    payload: user,
  };
};

export default { getUsers, removeUser, addUser, editUser };
