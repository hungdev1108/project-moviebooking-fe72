import { Fragment } from "react";
import { Redirect, Route } from "react-router-dom";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import { USER_LOGIN } from "../../util/settings/config";

export const UserTemplate = (props) => {
  // path, exact, Component
  const { Component, ...restProps } = props;

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        // props.location, props.history, props.match
        return (
          <Fragment>
            {/* <Login />
            <Register /> */}
          </Fragment>
        );
      }}
    />
  );
};
