import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OpinionListRelationFilter } from "../opinion/OpinionListRelationFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type SoldierWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  opinions?: OpinionListRelationFilter;
  team?: TeamWhereUniqueInput;
};
