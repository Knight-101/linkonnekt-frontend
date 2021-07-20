import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userDataReducer from "./userData/userDataReducer";
import profileInfoReducer from "./profileInfo/profileInfoReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userData", "profileInfo"],
};

const appReducer = combineReducers({
  userData: userDataReducer,
  profileInfo: profileInfoReducer,
});

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === "USER_LOGOUT") {
    state = undefined;
  }

  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
