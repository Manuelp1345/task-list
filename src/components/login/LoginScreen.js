import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  useEffect(() => {
    dispatch({
      type: types.Check,
    });
  }, [dispatch]);

  const handleLogin = () => {
    dispatch({
      type: types.login,
    });
  };

  return (
    <div className="container vh-100 justify-content-center align-items-center d-flex flex-column">
      <h1 className=" text-white">Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
