import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import createStore from "./store";

const store = createStore();

const AppWithRouter = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

ReactDOM.render(
  <Provider store={store} key="provider">
    <AppWithRouter />
  </Provider>,
  document.getElementById("root")
);
