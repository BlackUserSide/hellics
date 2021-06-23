import { Dispatch } from "react";

export interface IStateItemRoute {
  dataItem: Array<TArrayItem>;
  title: string | Dispatch<TitleType> | undefined;
}
type TitleType = {
  cases: string;
};
export type TArrayItem = {
  id: number;
  name: string;
  time: string;
  image: string;
  category: number;
  nameEng: string;
};
