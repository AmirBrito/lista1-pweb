import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Q01 from "./pages/Q01";
import Q02 from "./pages/Q02";
import Q03 from "./pages/Q03";
import Q04 from "./pages/Q04";
import Q05 from "./pages/Q05";
import Q06 from "./pages/Q06";
import Q07 from "./pages/Q07";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/q01" exact component={Q01} />
        <Route path="/q02" exact component={Q02} />
        <Route path="/q03" exact component={Q03} />
        <Route path="/q04" exact component={Q04} />
        <Route path="/q05" exact component={Q05} />
        <Route path="/q06" exact component={Q06} />
        <Route path="/q07" exact component={Q07} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
