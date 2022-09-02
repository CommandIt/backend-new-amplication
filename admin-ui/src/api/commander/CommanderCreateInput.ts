import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommanderCreateInput = {
  name?: string | null;
  team?: TeamWhereUniqueInput | null;
  user: UserWhereUniqueInput;
};
