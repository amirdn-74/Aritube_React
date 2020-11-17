import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import * as auth from "../../services/authService";

function HideOnLogin({ children }) {
  const user = useSelector((state) => state.auth.currentUser);

  return <Fragment>{!auth.userIsLogedin() && !user && children}</Fragment>;
}

export default HideOnLogin;
