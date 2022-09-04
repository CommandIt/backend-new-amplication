import { Commander } from "../commander/Commander";
import { Soldier } from "../soldier/Soldier";

export type Team = {
  commanders?: Array<Commander>;
  createdAt: Date;
  id: string;
  name: string | null;
  soldier?: Array<Soldier>;
  updatedAt: Date;
};
