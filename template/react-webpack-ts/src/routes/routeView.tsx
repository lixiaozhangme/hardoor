import React from "react";
import {Switch, Route} from "react-router-dom";

import {RouteViewProps} from "@/types/routes";

export default function RouteView(props: RouteViewProps) {
    const {routes} = props;

    return (
        <Switch>
            {routes ? routes.map((r) => {
                return (
                    <Route key={r.id} path={r.path} exact={r.exact} component={r.component}/>
                );
            }) : ""}
        </Switch>
    );
}
