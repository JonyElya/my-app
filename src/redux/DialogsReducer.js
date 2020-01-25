const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";
let initialState = {
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
};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMsg = state.newMessageText;
      state.messagesData.push({ id: 6, message: newMsg });
      state.newMessageText = "";
      break;
    case UPDATE_MESSAGE:
      state.newMessageText = action.newMsg;
      break;
    default:
      break;
  }
  return state;
};
export const sendMessageAction = () => ({ type: SEND_MESSAGE });
export const updateMessageAction = text => ({
  type: UPDATE_MESSAGE,
  newMsg: text
});
export default dialogsReducer;
