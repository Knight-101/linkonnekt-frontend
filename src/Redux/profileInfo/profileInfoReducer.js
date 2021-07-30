import {
  SET_PERSONAL_DATA,
  SET_CAT_DATA,
  SET_URL,
  SET_POP,
} from "./profileInfoTypes";

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
  socialLinks: {
    Instagram: "",
    Facebook: "",
    LinkedIn: "",
    Twitter: "",
    YouTube: "",
  },
  popularity: 0,
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
    case SET_URL:
      return {
        ...state,

        socialLinks: {
          Instagram: action.payload.Instagram,
          Facebook: action.payload.Facebook,
          LinkedIn: action.payload.LinkedIn,
          Twitter: action.payload.Twitter,
          YouTube: action.payload.YouTube,
        },
      };
    case SET_POP:
      return {
        ...state,

        popularity: action.payload.popularity,
      };

    default:
      return state;
  }
};

export default profileInfoReducer;
