import React, { useContext, useEffect, useState } from "react";
import { MainWidthContent } from "../../MainWidthContet";
import { Header } from "../HeaderComposition/Header";
import { MainNavBar } from "./MainNavBar";
import "./mainwrapper.sass";
import { TextMainWrapper } from "./TextMainWrapper";

export const MainWrapper = () => {
  const [statDevice, setStatDevice] = useState<String>();
  const { device } = useContext(MainWidthContent);
  useEffect(() => {
    if (device) {
      if (device() === "desktop") {
        setStatDevice(device());
        return;
      }
      setStatDevice(device());
    }
  }, [device]);
  return (
    <div className="main-wrapper">
      <div className="bg-lock-main"></div>
      <Header />
      {statDevice === "desktop" ? <MainNavBar /> : ""}
      <TextMainWrapper />
    </div>
  );
};
