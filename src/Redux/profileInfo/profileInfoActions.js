import { SET_PERSONAL_DATA, SET_CAT_DATA, SET_URL } from "./profileInfoTypes";

export const setProfileData = (personalInfo) => {
  return {
    type: SET_PERSONAL_DATA,
    payload: {
      firstName: personalInfo.firstName,
      lastName: personalInfo.lastName,
      country: personalInfo.country,
      state: personalInfo.state,
      address: personalInfo.address,
      pincode: personalInfo.pincode,
    },
  };
};

export const setCatData = (categories) => {
  return {
    type: SET_CAT_DATA,
    payload: {
      Category: categories.Category,
      Platforms: {
        P1: {
          Platform: categories.Platforms.P1.Platform,
          Followers: categories.Platforms.P1.Followers,
          Subscribers: categories.Platforms.P1.Subscribers,
        },
        P2: {
          Platform: categories.Platforms.P2.Platform,
          Followers: categories.Platforms.P2.Followers,
          Subscribers: categories.Platforms.P2.Subscribers,
        },
        P3: {
          Platform: categories.Platforms.P3.Platform,
          Followers: categories.Platforms.P3.Followers,
          Subscribers: categories.Platforms.P3.Subscribers,
        },
        P4: {
          Platform: categories.Platforms.P4.Platform,
          Followers: categories.Platforms.P4.Followers,
          Subscribers: categories.Platforms.P4.Subscribers,
        },
      },
    },
  };
};

export const setUrls = (urls) => {
  return {
    type: SET_URL,
    payload: {
      Instagram: urls.Instagram,
      Facebook: urls.Facebook,
      LinkedIn: urls.LinkedIn,
      Twitter: urls.Twitter,
      YouTube: urls.YouTube,
    },
  };
};
