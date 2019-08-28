import React, { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { paths } from "./paths";
import { HomePageContainer } from "../components/homePage/HomePageContainer";
import { AdminPanelContainer } from "../components/adminPanel/AdminPanelContainer";

export const Routes: FC<{}> = () => {
    return (
        <Switch>
            <Route path={paths.home} component={HomePageContainer} />
            <Route path={paths.admin} component={AdminPanelContainer} />
            <Redirect to={paths.home} />
        </Switch>
    );
};

export default Routes;
