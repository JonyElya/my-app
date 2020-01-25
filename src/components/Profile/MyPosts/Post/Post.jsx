import React from "react";
import style from "./Post.module.css";

const Post = props => {
  return (
    <div className={style.item}>
      <img
        src="http://aux.iconspalace.com/uploads/19682701751567859374.png"
        alt=""
      />
      {props.message}
      <div>
        <span>{props.likesCount} like</span>
      </div>
    </div>
  );
};
export default Post;
