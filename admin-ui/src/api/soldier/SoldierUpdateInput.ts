import { OpinionUpdateManyWithoutSoldiersInput } from "./OpinionUpdateManyWithoutSoldiersInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type SoldierUpdateInput = {
  description?: string | null;
  name?: string | null;
  opinions?: OpinionUpdateManyWithoutSoldiersInput;
  team?: TeamWhereUniqueInput | null;
};
