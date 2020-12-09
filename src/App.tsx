import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.sass";
import "./components/media.sass";
import { CardItemWrapper } from "./components/CartItem/CardItemWrapper";
import { Footer } from "./components/FooterComposition/Footer";
import { MainPage } from "./components/MainPage/MainPage";
import { RoutesMain } from "./components/RoutesPage/RoutesMain";
import { CenterWrapper } from "./components/CenterEdPage/CenterWrapper";
import { CardCenterWrapper } from "./components/CardCenter/CardCenterWrapper";
import { MainWidthContent, TPartial } from "./components/MainWidthContet";

export const App = () => {
  const [width, setWidth] = useState(0);
  const mainContent: TPartial = {
    checkWidth: () => {
      const screens = window.screen.width;
      setWidth(screens);
    },
    width: width,
    device: () => {
      const screens = window.screen.width;
      if (screens <= 750) {
        return "mobile";
      }
      return "desktop";
    },
  };
  return (
    <div className="main-app-heliluxury">
      <MainWidthContent.Provider value={mainContent}>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/routes" component={RoutesMain} />
          <Route path="/card/:id" component={CardItemWrapper} />
          <Route path="/educational-center" component={CenterWrapper} />
          <Route path="/card-center/:id" component={CardCenterWrapper} />
        </Switch>
        <Footer />
      </MainWidthContent.Provider>
    </div>
  );
};
