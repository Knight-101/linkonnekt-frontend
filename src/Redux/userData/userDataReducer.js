import { SET_DATA, SET_IMG } from "./userDataTypes";

const initialState = {
  username: "",
  email: "",
  role: "",
  profileImg: process.env.REACT_APP_BACKEND_URL + "/public/uploads/Default.png",
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
    case SET_IMG:
      return {
        ...state,
        profileImg: action.payload.profileImg,
      };
    default:
      return state;
  }
};

export default userDataReducer;
