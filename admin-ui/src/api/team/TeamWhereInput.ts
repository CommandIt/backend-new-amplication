import { CommanderListRelationFilter } from "../commander/CommanderListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SoldierListRelationFilter } from "../soldier/SoldierListRelationFilter";

export type TeamWhereInput = {
  commanders?: CommanderListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  soldier?: SoldierListRelationFilter;
};
