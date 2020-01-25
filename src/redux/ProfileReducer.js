const UPDATE_POST = "UPDATE-POST";
const ADD_POST = "ADD-POST";
let initialState = {
  postsData: [
    {
      id: 1,
      message: "dimcfdczxa",
      likes: 12
    },
    {
      id: 2,
      message: "dimcfdddddczxa",
      likes: 123
    },
    {
      id: 3,
      message: "dimcfdczxa",
      likes: 12
    }
  ],
  newPostText: ""
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likes: 0
      };
      state.postsData.push(newPost);
      state.newPostText = "";

      break;
    case UPDATE_POST:
      state.newPostText = action.newText;

      break;
    default:
      break;
  }
  return state;
};
export const addPostAction = () => ({ type: ADD_POST });
export const updatePostAction = textPost => ({
  type: UPDATE_POST,
  newText: textPost
});
export default profileReducer;
