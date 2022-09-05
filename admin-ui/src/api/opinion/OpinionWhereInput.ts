import { DateTimeFilter } from "../../util/DateTimeFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SoldierWhereUniqueInput } from "../soldier/SoldierWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";

export type OpinionWhereInput = {
  date?: DateTimeFilter;
  energy?: FloatNullableFilter;
  id?: StringFilter;
  positivity?: FloatNullableFilter;
  productivity?: FloatNullableFilter;
  soldier?: SoldierWhereUniqueInput;
  text?: JsonFilter;
};
