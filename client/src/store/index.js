import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

export default (intialState = {}) => {
  const middlewares = [thunk];

  return createStore(rootReducer, intialState, applyMiddleware(...middlewares));
};
