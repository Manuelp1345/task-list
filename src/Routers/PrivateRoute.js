import React from "react";
import { Redirect, Route } from "react-router";
import PropTypes from "prop-types";

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? (
          <Component {...props}></Component>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

PrivateRoute.prototype = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
