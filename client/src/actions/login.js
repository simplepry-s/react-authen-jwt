import { notification } from "antd";
import axios from "axios";
import { setToken, logout } from "../utils/auth/";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const INCREMENT_TEST = "INCREMENT_TEST";

const API = "http://localhost:8080/api/account";

export const auth_Login = (username, password, ownProps) => {
  const data = { username, password };
  return async dispatch => {
    try {
      const response = await axios.post(API, data);
      if (response.data.status === "SUCCESS") {
        notification.success({ message: "LOGIN SUCCESS" });
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response.data
        });
        setToken(response.data.token);
        console.log(response.data);
        ownProps.history.push("/");
      } else {
        notification.error({ message: "LOGIN FAIL" });
      }
    } catch (error) {
      notification.error({ message: error.toString() });
    }
  };
};

export const auth_Logout = () => {
  logout();
  return { type: "LOGOUT_SUCCESS" };
};
