import React from "react";
import Profile from "./Profile";
import { withRouter } from "react-router-dom";
import * as axios from "axios";
import { connect } from "react-redux";
import { setProfile } from "../../redux/ProfileReducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 1;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        this.props.setProfile(response.data);
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
