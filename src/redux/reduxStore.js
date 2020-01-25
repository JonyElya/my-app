import { combineReducers, createStore } from "redux";
import profileReduser from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";

const reducer = combineReducers({
  profilePage: profileReduser,
  dialogsPage: dialogsReducer
});
let store = createStore(reducer);
export default store;
