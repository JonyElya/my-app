import React from "react";
import Profile from "./Profile";
import { withRouter } from "react-router-dom";
import * as axios from "axios";
import { connect } from "react-redux";
import { setProfile } from "../../redux/ProfileReducer";
import { profileAPI } from "../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    debugger;
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 5912;
    }
    profileAPI.getProfile(userId).then(data => {
      this.props.setProfile(data);
    });
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
let mapState = state => {
  return {
    profile: state.profilePage.profile
  };
};

let ProfileContainerRout = withRouter(ProfileContainer);

export default connect(mapState, { setProfile })(ProfileContainerRout);
