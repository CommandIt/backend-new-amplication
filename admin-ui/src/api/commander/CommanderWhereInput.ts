import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommanderWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  team?: TeamWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
