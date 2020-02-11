import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

class MyPosts extends React.Component {
  constructor(props) {
    super(props);
    this.addPost = this.addPost.bind(this);
    this.onChangePostText = this.onChangePostText.bind(this);
  }

  addPost = () => {
    this.props.addPost();
  };
  onChangePostText = e => {
    let text = e.target.value;
    this.props.updatePostText(text);
  };
  render() {
    return (
      <div className={style.Posts_block}>
        <h2>My posts</h2>
        <div className={style.item}>
          <div>
            <textarea
              onChange={this.onChangePostText}
              value={this.props.newPost}
            />
          </div>
          <div>
            <button onClick={this.addPost}>Add post</button>
          </div>
        </div>
        <div className={style.Post}>
          {this.props.posts.map(p => (
            <Post message={p.message} likesCount={p.likes} />
          ))}
        </div>
      </div>
    );
  }
}

export default MyPosts;
