import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loggedInUser } = useContext(GlobalContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        loggedInUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
