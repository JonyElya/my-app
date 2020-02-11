import { combineReducers, createStore } from "redux";
import profileReduser from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import UsersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";

const reducers = combineReducers({
  profilePage: profileReduser,
  dialogsPage: dialogsReducer,
  usersPage: UsersReducer,
  auth: AuthReducer
});
let store = createStore(reducers);
export default store;
