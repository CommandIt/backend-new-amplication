import { CommanderUpdateManyWithoutTeamsInput } from "./CommanderUpdateManyWithoutTeamsInput";
import { SoliderUpdateManyWithoutTeamsInput } from "./SoliderUpdateManyWithoutTeamsInput";

export type TeamUpdateInput = {
  commanders?: CommanderUpdateManyWithoutTeamsInput;
  name?: string | null;
  soliders?: SoliderUpdateManyWithoutTeamsInput;
};
