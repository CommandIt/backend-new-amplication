import { Soldier } from "../soldier/Soldier";

export type Opinion = {
  createdAt: Date;
  date: Date;
  energy: number | null;
  id: string;
  positivity: number | null;
  productivity: number | null;
  soldier?: Soldier;
  text: string | null;
  updatedAt: Date;
};
