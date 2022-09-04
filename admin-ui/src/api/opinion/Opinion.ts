import { Solider } from "../solider/Solider";

export type Opinion = {
  createdAt: Date;
  date: Date;
  energy: number | null;
  id: string;
  positivity: number | null;
  productivity: number | null;
  solider?: Solider;
  text: string | null;
  updatedAt: Date;
};
