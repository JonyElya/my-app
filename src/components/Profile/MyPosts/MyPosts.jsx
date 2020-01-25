import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostAction, updatePostAction } from "../../../redux/state";

const MyPosts = props => {
  let postsElement = props.postsData.map(p => (
    <Post message={p.message} likesCount={p.likes} />
  ));

  let addPost = () => {
    props.dispatch(addPostAction());
  };
  let onChangePostText = e => {
    let textPost = e.target.value;
    props.dispatch(updatePostAction(textPost));
  };
  return (
    <div className={style.Posts_block}>
      <h2>My posts</h2>
      <div className={style.item}>
        <div>
          <textarea onChange={onChangePostText} value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={style.Post}>{postsElement}</div>
    </div>
  );
};
export default MyPosts;
