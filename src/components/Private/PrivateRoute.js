import React from "react";
import { Navigate, useLocation } from "react-router";
import useFirebase from "../../hooks/useFirebase";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useFirebase();
  let location = useLocation();
  if (isLoading) {
    return (
      <div className="text-center loading">
        <button className="btn btn-primary" type="button">
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Loading...
        </button>
      </div>
    );
  }

  if (user.email) {
    return children;
  }
  return <Navigate to="/sign-in" state={{ from: location }} />;
};

export default PrivateRoute;
