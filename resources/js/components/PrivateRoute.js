import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
  } from "react-router-dom";

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const PrivateRoute = ({ children, ...rest }) => {
    console.log('children', children)
    console.log('rest', rest)
    return (
      <Route
        {...rest}
        render={({ location }) =>
          rest.loggedIn ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateRoute;
