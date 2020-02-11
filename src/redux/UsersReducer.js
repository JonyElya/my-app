const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USER = "SET_USER";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_LOADING = "SET_LOADING";
let initialState = {
  users: [],
  pageSize: 5,
  totalCount: 0,
  currentPage: 1,
  loading: true
};
const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: [...state.users],
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        })
      };

    case UNFOLLOW:
      return {
        ...state,
        users: [...state.users],
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        })
      };
    case SET_USER: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalCount: action.count };
    }
    case SET_LOADING: {
      return { ...state, loading: action.l };
    }
    default:
      return state;
  }
};
export const follow = userId => ({ type: FOLLOW, userId });
export const unfollow = userId => ({
  type: UNFOLLOW,
  userId
});
export const setUsers = users => ({
  type: SET_USER,
  users
});
export const setLoad = l => ({
  type: SET_LOADING,
  l
});
export const setCurrentPage = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage
});
export const setTotalUsersCount = count => ({
  type: SET_TOTAL_USERS_COUNT,
  count
});
export default UsersReducer;
