import { CommanderCreateNestedManyWithoutTeamsInput } from "./CommanderCreateNestedManyWithoutTeamsInput";
import { SoldierCreateNestedManyWithoutTeamsInput } from "./SoldierCreateNestedManyWithoutTeamsInput";

export type TeamCreateInput = {
  commanders?: CommanderCreateNestedManyWithoutTeamsInput;
  name?: string | null;
  soldier?: SoldierCreateNestedManyWithoutTeamsInput;
};
