import { HashRouter as Router } from "react-router-dom";
import { AppProvider } from "@8base/app-provider";
import { Spinner } from "react-bootstrap";
import Containers from "./ContainersItems";

const ENDPOINT_URL = "https://api.8base.com/cktkpyrbz00lt06jycm663jhk";

function Main() {
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
