import { SoldierWhereUniqueInput } from "../soldier/SoldierWhereUniqueInput";

export type OpinionCreateInput = {
  date: Date;
  energy?: number | null;
  positivity?: number | null;
  productivity?: number | null;
  soldier: SoldierWhereUniqueInput;
  text?: string | null;
};
