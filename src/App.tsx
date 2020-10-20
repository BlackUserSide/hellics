import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.sass";
import { MainPage } from "./components/MainPage/MainPage";

export const App = () => {
  return (
    <div className="main-app-heliluxury">
      <Switch>
        <Route path="/" exact component={MainPage} />
      </Switch>
    </div>
  );
};
