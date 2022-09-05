import { Soldier } from "../soldier/Soldier";
import { JsonValue } from "type-fest";

export type Opinion = {
  createdAt: Date;
  date: Date;
  energy: number | null;
  id: string;
  positivity: number | null;
  productivity: number | null;
  soldier?: Soldier;
  text: JsonValue;
  updatedAt: Date;
};
