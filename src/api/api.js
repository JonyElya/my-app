import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "1e728346-6f1f-4770-9867-bdbaae1682be"
  }
});
export const usersAPI = {
  getUser(currentPage = 1, pageSize = 5) {
    return instance
      .get(`users?&page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      });
  },
  follow(id) {
    return instance.post(`follow/${id}`).then(response => {
      return response.data;
    });
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`).then(response => {
      return response.data;
    });
  }
};
export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId).then(response => {
      return response.data;
    });
  }
};
export const authAPI = {
  getUserLogin() {
    return instance.get(`auth/me/`).then(response => {
      return response.data;
    });
  }
};
