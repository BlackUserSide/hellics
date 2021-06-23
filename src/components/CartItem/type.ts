export interface IRouteParam {
  id: string | undefined;
}
export interface IStateCard {
  name: string;
  nameEng: string;
  time: string;
  category: number;
  id: number;
  image: string;
  descEng: string;
  descMain: string;
  priceTrans: Array<ArrayType>;
}
export type ArrayType = {
  name: string;
  price: string;
  candidate: string;
};
