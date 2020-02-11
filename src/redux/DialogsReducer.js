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
      return {
        ...state,
        newMessageText: "",
        messagesData: [...state.messagesData, { id: 6, message: newMsg }]
      };

    case UPDATE_MESSAGE:
      return {
        ...state,
        newMessageText: action.newMsg
      };

    default:
      break;
  }
  return state;
};
export const sendMessage = () => ({ type: SEND_MESSAGE });
export const updateMessage = text => ({
  type: UPDATE_MESSAGE,
  newMsg: text
});
export default dialogsReducer;
