import React from "react";
import style from "./Users.module.css";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";

const Users = props => {
  let pagesCount = Math.ceil(props.totalCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={style.users}>
      <div className="">
        {pages.map(p => {
          return (
            <span
              className={props.currentPage === p && style.selectedPage}
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map(u => (
        <div key={u.id}>
          <div className="">
            <div className={style.users_img}>
              <NavLink to={`/profile/${u.id}`}>
                <img src={u.photos.small} />
              </NavLink>
            </div>
            <div className="">
              {u.followed ? (
                <button
                  onClick={() => {
                    usersAPI.unfollow(u.id).then(data => {
                      if (data.resultCode === 0) {
                        props.unfollow(u.id);
                      }
                    });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    usersAPI.follow(u.id).then(data => {
                      if (data.resultCode === 0) {
                        props.follow(u.id);
                      }
                    });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
          <div className="">
            <div className="">{u.name}</div>
            <div className="">{u.status}</div>
            <div className="">
              <div className="">{u.city}</div>
              <div className="">{u.country}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Users;
