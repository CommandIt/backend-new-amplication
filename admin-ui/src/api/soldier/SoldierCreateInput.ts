import { OpinionCreateNestedManyWithoutSoldiersInput } from "./OpinionCreateNestedManyWithoutSoldiersInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type SoldierCreateInput = {
  name?: string | null;
  opinions?: OpinionCreateNestedManyWithoutSoldiersInput;
  team?: TeamWhereUniqueInput | null;
};
