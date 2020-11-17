import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { userIsLogedin } from "../../services/authService";

function ChannelOwnerRoute({
  path,
  exact = false,
  component,
  render,
  ...rest
}) {
  const user = useSelector((state) => state.auth.currentUser);

  if (userIsLogedin())
    return (
      <Fragment>
        {!user && ""}
        {user && user.hasChannel && (
          <Route
            path={path}
            exact={exact}
            component={component}
            render={render}
            {...rest}
          />
        )}
      </Fragment>
    );
  else return <Redirect to="/account/login" />;
}

export default ChannelOwnerRoute;
