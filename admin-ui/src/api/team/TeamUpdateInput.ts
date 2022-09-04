import { CommanderUpdateManyWithoutTeamsInput } from "./CommanderUpdateManyWithoutTeamsInput";
import { SoldierUpdateManyWithoutTeamsInput } from "./SoldierUpdateManyWithoutTeamsInput";

export type TeamUpdateInput = {
  commanders?: CommanderUpdateManyWithoutTeamsInput;
  name?: string | null;
  soldier?: SoldierUpdateManyWithoutTeamsInput;
};
