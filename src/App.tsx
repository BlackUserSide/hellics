import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.sass";
import "./components/media.sass";
import { CardItemWrapper } from "./components/CartItem/CardItemWrapper";
import { Footer } from "./components/FooterComposition/Footer";
import { MainPage } from "./components/MainPage/MainPage";
import { RoutesMain } from "./components/RoutesPage/RoutesMain";

export const App = () => {
  return (
    <div className="main-app-heliluxury">
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/routes" component={RoutesMain} />
        <Route path="/card/:id" component={CardItemWrapper} />
      </Switch>
      <Footer />
    </div>
  );
};
