import { CommanderCreateNestedManyWithoutTeamsInput } from "./CommanderCreateNestedManyWithoutTeamsInput";
import { SoliderCreateNestedManyWithoutTeamsInput } from "./SoliderCreateNestedManyWithoutTeamsInput";

export type TeamCreateInput = {
  commanders?: CommanderCreateNestedManyWithoutTeamsInput;
  name?: string | null;
  soliders?: SoliderCreateNestedManyWithoutTeamsInput;
};
