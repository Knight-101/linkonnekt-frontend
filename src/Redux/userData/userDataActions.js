import { SET_DATA, SET_IMG } from "./userDataTypes";

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

export const setImg = (img) => {
  return {
    type: SET_IMG,
    payload: {
      profileImg: img,
    },
  };
};
