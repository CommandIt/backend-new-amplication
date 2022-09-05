import { OpinionCreateNestedManyWithoutSoldiersInput } from "./OpinionCreateNestedManyWithoutSoldiersInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type SoldierCreateInput = {
  description?: string | null;
  name?: string | null;
  opinions?: OpinionCreateNestedManyWithoutSoldiersInput;
  team?: TeamWhereUniqueInput | null;
};
