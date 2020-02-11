import React from "react";
import { updateMessage, sendMessage } from "../../../redux/DialogsReducer";
import MyMessage from "./MyMessage";
import { connect } from "react-redux";

// const MyMessageContainer = props => {
//   let state = props.store.getState();
//   let messageElement = state.dialogsPage.messagesData;
//   let newMessageBody = state.dialogsPage.newMessageText;
//   let sendMessageClick = () => {
//     props.store.dispatch(sendMessageAction());
//   };
//   let changeMsg = text => {
//     props.store.dispatch(updateMessageAction(text));
//   };

//   return (
//     <MyMessage
//       updateMessage={changeMsg}
//       sendMessage={sendMessageClick}
//       newMessageBody={newMessageBody}
//       msg={messageElement}
//     />
//   );
// };
let mapStateMsg = state => {
  return {
    newMessageBody: state.dialogsPage.newMessageText,
    msg: state.dialogsPage.messagesData
  };
};

const MyMessageContainer = connect(mapStateMsg, { sendMessage, updateMessage })(
  MyMessage
);
export default MyMessageContainer;
