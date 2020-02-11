import React from "react";
import { addPost, updatePost } from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapState = state => {
  return {
    posts: state.profilePage.postsData,
    newPost: state.profilePage.newPostText
  };
};

const MyPostsContainer = connect(mapState, { addPost, updatePost })(MyPosts);
export default MyPostsContainer;
