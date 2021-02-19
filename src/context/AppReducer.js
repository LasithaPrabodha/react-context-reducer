import { SIGNUP_USER, EDIT_USER, SET_USERS, REMOVE_USER, SIGNIN_USER, LOGOUT_USER } from "./ActionTypes";

export default (state, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter((user) => {
          return user.id !== action.payload;
        }),
      };
    case SIGNUP_USER:
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    case SIGNIN_USER:
      return {
        ...state,
        loggedInUser: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        loggedInUser: null,
      };
    case EDIT_USER:
      const updateUser = action.payload;

      const updateUsers = state.users.map((user) => {
        if (user.id === updateUser.id) {
          return updateUser;
        }
        return user;
      });
      return {
        ...state,
        users: updateUsers,
      };

    default:
      return state;
  }
};
