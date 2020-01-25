import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";

let store = {
  _state: {
    profilePage: {
      postsData: [
        {
          id: 1,
          message: "dimcfdczxa",
          likes: 12
        },
        {
          id: 2,
          message: "dimcfdddddczxa",
          likes: 123
        },
        {
          id: 3,
          message: "dimcfdczxa",
          likes: 12
        }
      ],
      newPostText: ""
    },
    dialogsPage: {
      dialogsData: [
        {
          id: 1,
          name: "dima"
        },
        {
          id: 2,
          name: "sasha"
        },
        {
          id: 3,
          name: "sasha2"
        }
      ],
      messagesData: [
        {
          id: 1,
          message: "dima ggggggg"
        },
        {
          id: 2,
          message: "dima"
        },
        {
          id: 3,
          message: "dima"
        }
      ],
      newMessageText: ""
    },
    sidebar: {}
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("hey");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  }
};

window.store = store;

export default store;
