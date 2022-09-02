import { Commander } from "../commander/Commander";
import { Solider } from "../solider/Solider";

export type Team = {
  commanders?: Array<Commander>;
  createdAt: Date;
  id: string;
  name: string | null;
  soliders?: Array<Solider>;
  updatedAt: Date;
};