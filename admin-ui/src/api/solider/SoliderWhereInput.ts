import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OpinionListRelationFilter } from "../opinion/OpinionListRelationFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type SoliderWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  opinions?: OpinionListRelationFilter;
  team?: TeamWhereUniqueInput;
};
