import React from "react";
import style from "../Dialogs.module.css";
import Message from "./Message/Message";

class MyMessage extends React.Component {
  constructor(props) {
    super(props);
    this.sendMessageClick = this.sendMessageClick.bind(this);
    this.changeMsg = this.changeMsg.bind(this);
  }
  sendMessageClick() {
    this.props.sendMessage();
  }
  changeMsg = e => {
    let text = e.target.value;
    this.props.updateMessage(text);
  };
  render() {
    return (
      <div className={style.message}>
        <div className="">
          {this.props.msg.map(m => (
            <Message message={m.message} />
          ))}
        </div>
        <div className="">
          <div>
            <textarea
              placeholder="Enter your message"
              onChange={this.changeMsg}
              value={this.props.newMessageBody}
            ></textarea>
          </div>
          <div className="">
            <button onClick={this.sendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    );
  }
}
export default MyMessage;
