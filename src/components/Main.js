import { HashRouter as Router } from "react-router-dom";
import { AppProvider } from "@8base/app-provider";
import { Spinner } from "react-bootstrap";
import Containers from "./ContainersItems";
import { useContext, useEffect } from "react";
import { AuthContext } from "../auth/AuthContext";
import { types } from "../types/types";

const ENDPOINT_URL = "https://api.8base.com/cktkpyrbz00lt06jycm663jhk";

function Main() {
  const { dispatch } = useContext(AuthContext);
  //comprobamos que el ususario este aunteticado
  useEffect(() => {
    dispatch({
      type: types.Check,
    });
  });

  return (
    <Router>
      <AppProvider uri={ENDPOINT_URL}>
        {({ loading }) =>
          loading ? (
            <div className=" vh-100 justify-content-center align-items-center d-flex">
              <h1 className="me-3 fw-bold text-white">Loading...</h1>
              <Spinner animation="border" variant="info" />
            </div>
          ) : (
            <Containers></Containers>
          )
        }
      </AppProvider>
    </Router>
  );
}

export default Main;
