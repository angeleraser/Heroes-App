import { types } from "../types/types";
export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        currentUser: {
          ...action.payload,
          logged: true,
        },
      };
    case types.register:
      return {
        ...state,
        users: [...state.users, action.payload],
        currentUser: { ...action.payload, logged: true },
      };
    case types.logout:
      return {
        ...state,
        currentUser: {
          ...action.payload,
          logged: false,
        },
      };
    default:
      return state;
  }
};
