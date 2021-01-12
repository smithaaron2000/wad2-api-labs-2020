// import React from "react";
// import { Route } from "react-router-dom";
// import { withAuthenticationRequired } from "@auth0/auth0-react";

// const PrivateRoute = ({ component, ...args}) => (
//     <Route
//     component={withAuthenticationRequired(component, {
//         onRedirecting: () => <div>Loading...</div>
//     })}
//     {...args}
//     />
// );

// export default PrivateRoute;

import React, { useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

const PrivateRoute = props => {
  const context = useContext(AuthContext)
  // Destructure props from <privateRoute> 
  const { component: Component, ...rest } = props;
  console.log(props.location)
  return context.isAuthenticated === true ? (
    <Route {...rest} render={props => <Component {...props} />} />
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { from: props.location }
      }}
    />
  );
};

export default PrivateRoute;

