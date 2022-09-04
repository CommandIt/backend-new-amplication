import { CommanderUpdateManyWithoutTeamsInput } from "./CommanderUpdateManyWithoutTeamsInput";
import { SoliderUpdateManyWithoutTeamsInput } from "./SoliderUpdateManyWithoutTeamsInput";

export type TeamUpdateInput = {
  commanders?: CommanderUpdateManyWithoutTeamsInput;
  name?: string | null;
  soldier?: SoliderUpdateManyWithoutTeamsInput;
};
