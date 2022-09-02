import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SoliderWhereUniqueInput } from "../solider/SoliderWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OpinionWhereInput = {
  energy?: FloatNullableFilter;
  id?: StringFilter;
  positivity?: FloatNullableFilter;
  productivity?: FloatNullableFilter;
  solider?: SoliderWhereUniqueInput;
  text?: StringNullableFilter;
};
