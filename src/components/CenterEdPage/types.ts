export interface IStateTextCenter {
  id: number;
  fullName: string;
  dob: string;
  fullFly: string;
  helicopters: Array<TArrayTextCenter>;
}

export type TArrayTextCenter = {
  id: number;
  name: string;
};
