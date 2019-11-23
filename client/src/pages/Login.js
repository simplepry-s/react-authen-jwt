import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropsTypes from "prop-types";
import { auth_Login } from "../actions/login";

import { loggedIn } from "../utils/auth/";

const Login = props => {
  let { actions } = props;

  useEffect(() => {
    if (loggedIn()) {
      props.history.replace("/");
    }
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = e => {
    const value = e.target.value;
    setUsername(value);
  };

  const handleChangePassword = e => {
    const value = e.target.value;
    setPassword(value);
  };

  const submitLogin = () => {
    actions.auth_Login(username, password, props);
  };

  const validate = () => {
    return username === "" && password === "" ? true : false;
  };

  return (
    <div className="loginContainer">
      <div className="loginInput">
        <input
          type="text"
          value={username}
          placeholder="username"
          onChange={e => handleChangeUsername(e)}
        />
        <input
          type="text"
          value={password}
          placeholder="password"
          onChange={e => handleChangePassword(e)}
        />

        <button disabled={validate()} onClick={() => submitLogin()}>
          LOGIN
        </button>
      </div>
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
    isAuthen: state.Login.isAuthen
  };
};

Login.propsTypes = {
  history: PropsTypes.shape({
    replace: PropsTypes.func.isRequired
  }).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
