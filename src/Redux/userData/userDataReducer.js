import { SET_DATA } from "./userDataTypes";

const initialState = {
  username: "",
  email: "",
  role: "",
};

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        role: action.payload.role,
      };

    default:
      return state;
  }
};

export default userDataReducer;
