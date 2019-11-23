import React from "react";
import PropsTypes from "prop-types";
import { logout } from "../utils/auth/";

const Home = props => {
  const handleLogout = () => {
    logout();
    props.history.replace("/login");
  };
  return (
    <div>
      Home Page <button onClick={() => handleLogout()}>LOGOUT</button>
    </div>
  );
};

Home.propsTypes = {
  history: PropsTypes.shape({
    replace: PropsTypes.func.isRequired
  }).isRequired
};

export default Home;
