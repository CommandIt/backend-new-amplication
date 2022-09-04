import { DateTimeFilter } from "../../util/DateTimeFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SoliderWhereUniqueInput } from "../solider/SoliderWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OpinionWhereInput = {
  date?: DateTimeFilter;
  energy?: FloatNullableFilter;
  id?: StringFilter;
  positivity?: FloatNullableFilter;
  productivity?: FloatNullableFilter;
  soldier?: SoliderWhereUniqueInput;
  text?: StringNullableFilter;
};
