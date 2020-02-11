import React from "react";
import Header from "./Header";
import { setUserLogin } from "../../redux/AuthReducer";
import { connect } from "react-redux";
import { authAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.getUserLogin().then(data => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        this.props.setUserLogin(id, login, email);
      }
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapState = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  email: state.auth.email
});
export default connect(mapState, { setUserLogin })(HeaderContainer);
