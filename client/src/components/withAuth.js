import React, { useState, useEffect } from "react";
import { getProfile, logout, loggedIn } from "../utils/auth/";

const withAuth = AuthComponent => {
  return props => {
    const [user, setUser] = useState(null);
    useEffect(() => {
      if (!loggedIn()) {
        props.history.replace("/login");
      } else {
        try {
          const profile = getProfile();
          setUser(profile);
        } catch (err) {
          logout();
         props.history.replace("/login");
        }
      }
    }, []);
    return user ? <AuthComponent history={props.history} user={user} /> : null;
  };
};

export default withAuth;
