import React from "react";
import { connect } from "react-redux";

const Home = props => {
  let { count } = props;
  return <div>Home Page {count}</div>;
};

const mapStateToProps = state => {
    console.log('statestate',state)
  return { count: state.Login.count };
};
export default connect(mapStateToProps, null)(Home);
