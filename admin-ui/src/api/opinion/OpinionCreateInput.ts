import { SoldierWhereUniqueInput } from "../soldier/SoldierWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type OpinionCreateInput = {
  date: Date;
  energy?: number | null;
  positivity?: number | null;
  productivity?: number | null;
  soldier: SoldierWhereUniqueInput;
  text?: InputJsonValue;
};
