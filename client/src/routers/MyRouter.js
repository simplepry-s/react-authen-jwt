import React from "react";
import { Switch, Route } from "react-router-dom";
import { Login, Home, PageNotFound, Public } from "../pages";
import { withAuth, NavBar } from "../components";

const MyRouter = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact component={withAuth(Home)} />
        <Route path="/login" exact component={Login} />
        <Route path="/public" exact component={Public} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </>
  );
};

export default MyRouter;
