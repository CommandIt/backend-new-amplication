import { OpinionUpdateManyWithoutSoldiersInput } from "./OpinionUpdateManyWithoutSoldiersInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type SoldierUpdateInput = {
  name?: string | null;
  opinions?: OpinionUpdateManyWithoutSoldiersInput;
  team?: TeamWhereUniqueInput | null;
};
