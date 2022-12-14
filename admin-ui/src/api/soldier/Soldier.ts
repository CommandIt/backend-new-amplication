import { JsonValue } from "type-fest";
import { Opinion } from "../opinion/Opinion";
import { Team } from "../team/Team";

export type Soldier = {
  createdAt: Date;
  description: JsonValue;
  id: string;
  name: string | null;
  opinions?: Array<Opinion>;
  team?: Team | null;
  updatedAt: Date;
};
