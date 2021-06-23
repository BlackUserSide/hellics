import React, { useEffect, useMemo, useState } from "react";
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
import { Context, LangContext } from "./LangContext";
import { InfraMain } from "./components/Infrastructure/InfraMain";
import { CardInfra } from "./components/Infrastructure/InfraComposition/CardInfra";

export const App = () => {
  const [width, setWidth] = useState(0);
  const [lang, setLang] = useState<string>("ru");

  useEffect(() => {
    const a = localStorage.getItem("lang");
    if (a === null) {
      localStorage.setItem("lang", "ru");
      setLang("ru");
    }
    if (a === "ru") {
      setLang("ru");
    }
    if (a === "eng") {
      setLang("eng");
    }
  }, []);

  const changeLang = useMemo(() => {
    return {
      changeLang: (lang: string) => {
        setLang(lang);
      },
    };
  }, []);

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
        <LangContext.Provider value={changeLang}>
          <Context.Provider value={lang}>
            <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/routes" component={RoutesMain} />
              <Route path="/card/:id" component={CardItemWrapper} />
              <Route path="/educational-center" component={CenterWrapper} />
              <Route path="/card-center/:id" component={CardCenterWrapper} />
              <Route path="/infra" component={InfraMain} />
              <Route path="/infrad/card/:id" component={CardInfra} />
            </Switch>
            <Footer />
          </Context.Provider>
        </LangContext.Provider>
      </MainWidthContent.Provider>
    </div>
  );
};
