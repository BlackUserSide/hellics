import { createContext } from "react";

interface TPropsContext {
  changeLang: any;
}

export const LangContext = createContext<Partial<TPropsContext>>({});
export const Context = createContext("");
