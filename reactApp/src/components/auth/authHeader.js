import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { AuthContext } from "./authContext";

const BaseAuthHeader = (props) => {
  const context = useContext(AuthContext);
  const { history } = props;

  return context.isAuthenticated ? (
    <p>
    Welcome {context.userName}!
    <button type = "button"
    className="btn w-10 btn-primary"
    onClick={() => context.signout()}>Sign out</button>
    </p>
  ) : (
    <p>
      <button type = "button"
      className="btn w-10 btn-primary"
      onClick={() => history.push("/login")}>Login</button>
    </p>
  );
};

export default withRouter(BaseAuthHeader);