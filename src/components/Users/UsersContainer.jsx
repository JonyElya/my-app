import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import * as axios from "axios";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setLoad
} from "../../redux/UsersReducer";
import { Lines } from "react-preloaders";

class UsersContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?&page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setLoad(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  onPageChanged = p => {
    this.props.setCurrentPage(p);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  };
  render() {
    return (
      <>
        <Lines customLoading={this.props.loading} time={0} />
        <Users
          totalCount={this.props.totalCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          users={this.props.users}
        />
      </>
    );
  }
}

let mapState = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    loading: state.usersPage.loading
  };
};

export default connect(mapState, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setLoad
})(UsersContainer);
