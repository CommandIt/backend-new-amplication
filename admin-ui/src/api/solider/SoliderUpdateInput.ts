import { OpinionUpdateManyWithoutSolidersInput } from "./OpinionUpdateManyWithoutSolidersInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type SoliderUpdateInput = {
  name?: string | null;
  opinions?: OpinionUpdateManyWithoutSolidersInput;
  team?: TeamWhereUniqueInput | null;
};
