import React from "react";
import { connect } from "react-redux";
import withAuth from "../components/withAuth";
import { logout } from "../utils/auth/";

const Home = props => {
  let { count } = props;

  const handleLogout = () => {
    logout();
    props.history.replace("/login");
  };
  return (
    <div>
      Home Page {count} <button onClick={() => handleLogout()}>OUT</button>
    </div>
  );
};

const mapStateToProps = state => {
  return { };
};
export default connect(mapStateToProps, null)(withAuth(Home));
