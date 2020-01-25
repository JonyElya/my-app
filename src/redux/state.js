const UPDATE_POST = "UPDATE-POST";
const ADD_POST = "ADD-POST";
const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

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
    }
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
    switch (action.type) {
      case ADD_POST:
        let newPost = {
          id: 5,
          message: this._state.profilePage.newPostText,
          likes: 0
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
        break;
      case UPDATE_POST:
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
        break;
      case SEND_MESSAGE:
        let newMsg = this._state.dialogsPage.newMessageText;
        this._state.dialogsPage.messagesData.push({ id: 6, message: newMsg });
        this._state.dialogsPage.newMessageText = "";
        this._callSubscriber(this._state);
        break;
      case UPDATE_MESSAGE:
        this._state.dialogsPage.newMessageText = action.newMsg;
        this._callSubscriber(this._state);
        break;
      default:
        break;
    }
  }
};
export const addPostAction = () => ({ type: ADD_POST });
export const updatePostAction = textPost => ({
  type: UPDATE_POST,
  newText: textPost
});
export const sendMessageAction = () => ({ type: SEND_MESSAGE });
export const updateMessageAction = text => ({
  type: UPDATE_MESSAGE,
  newMsg: text
});
window.store = store;

export default store;
