import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { auth_Login } from "../actions/login";
import { Link } from "react-router-dom";
import { loggedIn } from "../utils/auth/";

const Login = props => {
  useEffect(() => {
    if (loggedIn()) {
      props.history.replace("/");
    }
  }, []);
  let { isAuthen, username, token, actions } = props;
  console.log("isAuthen", isAuthen, "username", username, "token", token);
  return (
    <div>
      Login Page
      <button onClick={() => actions.auth_Login("test", "test", props)}>
        Login!!
      </button>
      <Link to="/">
        <button> Home Page</button>
      </Link>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ auth_Login }, dispatch)
  };
};

const mapStateToProps = state => {
  return {
    isAuthen: state.Login.isAuthen,
    username: state.Login.username,
    token: state.Login.token
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
