import React from "react";
import style from "./Dialogs.module.css";
import MyMessage from "./MyMessage/MyMessage";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = props => {
  let dialogsElement = props.state.dialogsData.map(dialog => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  return (
    <div className={style.dialogs}>
      <div className={style.dialogs_items}>{dialogsElement}</div>
      <div>
        <MyMessage
          msg={props.state.messagesData}
          dispatch={props.dispatch}
          newMessageText={props.state.newMessageText}
        />
      </div>
    </div>
  );
};
export default Dialogs;
