import React from "react";
import style from "../Dialogs.module.css";
import Message from "./Message/Message";
import {
  updateMessageAction,
  sendMessageAction
} from "../../../redux/DialogsReducer";

const MyMessage = props => {
  let messageElement = props.msg.map(m => <Message message={m.message} />);
  let newMessageBody = props.newMessageText;
  let sendMessageClick = () => {
    props.dispatch(sendMessageAction());
  };
  let changeMsg = e => {
    let text = e.target.value;
    props.dispatch(updateMessageAction(text));
  };

  return (
    <div className={style.message}>
      <div className="">{messageElement}</div>
      <div className="">
        <div>
          <textarea
            placeholder="Enter your message"
            onChange={changeMsg}
            value={newMessageBody}
          ></textarea>
        </div>
        <div className="">
          <button onClick={sendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};
export default MyMessage;
