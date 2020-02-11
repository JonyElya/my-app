import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MyMessageContainer from "./MyMessage/MyMessageContainer";

const Dialogs = props => {
  let dialogsElement = props.dialogs.map(dialog => (
      <DialogItem name={dialog.name} id={dialog.id} />
    ));

  return (
    <div className={style.dialogs}>
      <div className={style.dialogs_items}>{dialogsElement}</div>
      <div>
        <MyMessageContainer store={props.store} />
      </div>
    </div>
  );
};
export default Dialogs;
