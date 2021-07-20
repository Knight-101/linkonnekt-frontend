import { SET_PERSONAL_DATA, SET_CAT_DATA } from "./profileInfoTypes";

const initialState = {
  personalInfo: {
    firstName: "",
    lastName: "",
    country: "",
    state: "",
    address: "",
    pincode: "",
  },
  categories: {
    Category: "",
    Platforms: {
      P1: {
        Platform: "",
        Followers: "",
        Subscribers: "",
      },
      P2: {
        Platform: "",
        Followers: "",
        Subscribers: "",
      },
      P3: {
        Platform: "",
        Followers: "",
        Subscribers: "",
      },
      P4: {
        Platform: "",
        Followers: "",
        Subscribers: "",
      },
    },
  },
};

const profileInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PERSONAL_DATA:
      return {
        ...state,
        personalInfo: {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          country: action.payload.country,
          state: action.payload.state,
          address: action.payload.address,
          pincode: action.payload.pincode,
        },
      };
    case SET_CAT_DATA:
      return {
        ...state,
        categories: {
          ...state.categories,
          Category: action.payload.Category,
          Platforms: {
            P1: { ...action.payload.Platforms.P1 },
            P2: { ...action.payload.Platforms.P2 },
            P3: { ...action.payload.Platforms.P3 },
            P4: { ...action.payload.Platforms.P4 },
          },
        },
      };

    default:
      return state;
  }
};

export default profileInfoReducer;
