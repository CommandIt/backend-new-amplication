import { Commander } from "../commander/Commander";
import { Solider } from "../solider/Solider";

export type Team = {
  commanders?: Array<Commander>;
  createdAt: Date;
  id: string;
  name: string | null;
  soldier?: Array<Solider>;
  updatedAt: Date;
};
