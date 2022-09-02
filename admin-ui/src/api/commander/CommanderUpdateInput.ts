import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommanderUpdateInput = {
  name?: string | null;
  team?: TeamWhereUniqueInput | null;
  user?: UserWhereUniqueInput;
};
