const SET_USER_LOGIN = "SET_USER_LOGIN";

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false
};
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_LOGIN: {
      return { ...state, ...action.data, isAuth: true };
    }

    default:
      return state;
  }
};

export const setUserLogin = (userId, login, email) => ({
  type: SET_USER_LOGIN,
  data: { userId, login, email }
});
export default AuthReducer;
