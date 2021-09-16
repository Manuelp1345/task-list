import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import Main from "../components/Main";

export const DashboardRoutes = () => {
  return (
    <>
      <div className="container mt-2">
        <Switch>
          <Route path="/task" component={Main} />

          <Redirect to="/task" />
        </Switch>
      </div>
    </>
  );
};
