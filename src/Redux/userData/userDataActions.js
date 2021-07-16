import { SET_DATA } from "./userDataTypes";

export const setData = (username, email, role) => {
  return {
    type: SET_DATA,
    payload: {
      username: username,
      email: email,
      role: role,
    },
  };
};
