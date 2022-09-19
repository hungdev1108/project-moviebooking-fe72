import { Fragment } from "react";
import { Route } from "react-router-dom";
import Login from "../../pages/Login/Login";

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
            <Login />
          </Fragment>
        );
      }}
    />
  );
};
