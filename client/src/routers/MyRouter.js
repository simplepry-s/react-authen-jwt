import React from "react";
import { Switch, Route } from "react-router-dom";
import { Login, Home, PageNotFound } from "../pages";

const MyRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="*"  component={PageNotFound} />
    </Switch>
  );
};

export default MyRouter;
