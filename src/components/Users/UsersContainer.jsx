import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setLoad
} from "../../redux/UsersReducer";
import { Lines } from "react-preloaders";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    usersAPI.getUser(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.setLoad(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    });
  }
  onPageChanged = p => {
    this.props.setCurrentPage(p);
    usersAPI.getUser(p, this.props.pageSize).then(data => {
      this.props.setUsers(data.items);
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
