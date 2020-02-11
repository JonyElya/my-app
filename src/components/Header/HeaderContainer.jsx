import React from "react";
import Header from "./Header";
import * as axios from "axios";
import { setUserLogin } from "../../redux/AuthReducer";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me/`, {
        withCredentials: true
      })
      .then(response => {
        debugger;
        if (response.data.resultCode === 0) {
          let { id, login, email } = response.data.data;
          this.props.setUserLogin(id, login, email);
        }
      });
  }

  render() {
    return <Header {...this.props} />;
  }
}
debugger;
let mapState = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  email: state.auth.email
});
export default connect(mapState, { setUserLogin })(HeaderContainer);
