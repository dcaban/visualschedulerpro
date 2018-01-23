import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NotFoundPage from "../NotFoundPage";
import Daily from "./Daily";
import Requests from "./Requests";
import History from "./History";
import PersonalSchedule from "./PersonalSchedule";
import Team from "./Team";
import UserInfo from "./UserInfo";

const Routes = () =>
  <Switch>
    <Route
      exact
      path="/dashboard"
      render={() => <Redirect to="/dashboard/daily" />}
    />

    <Route path={"/dashboard/daily"} component={Daily} />
    <Route path={"/dashboard/requests"} component={Requests} />
    <Route path={"/dashboard/history"} component={History} />
    <Route path={"/dashboard/personal-schedule"} component={PersonalSchedule} />
    <Route path={"/dashboard/team"} component={Team} />
    <Route path={"/dashboard/user-info"} component={UserInfo} />
    <Route component={NotFoundPage} />
  </Switch>;

export default Routes;
