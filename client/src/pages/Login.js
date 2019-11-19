import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { incrementTest } from "../actions/login";
import { Link } from "react-router-dom";
const Login = props => {
  let { count, actions } = props;
  console.log(count);
  return (
    <div>
      Login Page {count}
      <button onClick={() => actions.incrementTest()}>increment!!</button>
      <Link to="/">
        <button> Home Page</button>
      </Link>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators({ incrementTest }, dispatch) };
};

const mapStateToProps = state => {
  return { count: state.Login.count };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
