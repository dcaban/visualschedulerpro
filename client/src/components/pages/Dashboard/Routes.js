import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NotFoundPage from "../NotFoundPage";
import Daily from "./Daily";
import BuyStock from "./BuyStock";
import History from "./History";
import AddFunds from "./AddFunds";
import SellStock from "./SellStock";
import UserInfo from "./UserInfo";

const Routes = () =>
  <Switch>
    <Route
      exact
      path="/dashboard"
      render={() => <Redirect to="/dashboard/daily" />}
    />

    <Route path={"/dashboard/daily"} component={Daily} />
    <Route path={"/dashboard/buy-stock"} component={BuyStock} />
    <Route path={"/dashboard/history"} component={History} />
    <Route path={"/dashboard/add-funds"} component={AddFunds} />
    <Route path={"/dashboard/sell-stock"} component={SellStock} />
    <Route path={"/dashboard/user-info"} component={UserInfo} />
    <Route component={NotFoundPage} />
  </Switch>;

export default Routes;
