import React from "react";
import style from "./Message.module.css";

const Message = props => {
  return (
    <div className={style.item}>
      <img
        src="http://aux.iconspalace.com/uploads/19682701751567859374.png"
        alt=""
      />
      {props.message}
    </div>
  );
};
export default Message;
