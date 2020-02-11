const UPDATE_POST = "UPDATE-POST";
const ADD_POST = "ADD-POST";
const SET_PROFILE = "SET_PROFILE";
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
  newPostText: "",
  profile: null
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likes: 0
      };

      return {
        ...state,
        newPostText: "",
        postsData: [...state.postsData, newPost]
      };

    case UPDATE_POST:
      return {
        ...state,
        newPostText: action.newText
      };
    case SET_PROFILE:
      return {
        ...state,
        profile: action.u
      };

    default:
      break;
  }
  return state;
};
export const addPost = () => ({ type: ADD_POST });
export const updatePost = textPost => ({
  type: UPDATE_POST,
  newText: textPost
});
export const setProfile = u => ({
  type: SET_PROFILE,
  u
});
export default profileReducer;
