import { SoldierWhereUniqueInput } from "../soldier/SoldierWhereUniqueInput";

export type OpinionUpdateInput = {
  date?: Date;
  energy?: number | null;
  positivity?: number | null;
  productivity?: number | null;
  soldier?: SoldierWhereUniqueInput;
  text?: string | null;
};
