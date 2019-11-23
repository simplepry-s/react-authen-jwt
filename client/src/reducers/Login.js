import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actions/login";
import { loggedIn } from "../utils/auth/";

let intialState = { isAuthen: loggedIn(), username: "" };

export default (state = intialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isAuthen: true,
        username: action.payload.username
      });
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isAuthen: false,
        username: ""
      });
    default:
      return state;
  }
};
