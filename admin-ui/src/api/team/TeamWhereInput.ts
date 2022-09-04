import { CommanderListRelationFilter } from "../commander/CommanderListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SoliderListRelationFilter } from "../solider/SoliderListRelationFilter";

export type TeamWhereInput = {
  commanders?: CommanderListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  soldier?: SoliderListRelationFilter;
};
