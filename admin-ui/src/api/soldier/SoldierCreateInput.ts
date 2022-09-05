import { InputJsonValue } from "../../types";
import { OpinionCreateNestedManyWithoutSoldiersInput } from "./OpinionCreateNestedManyWithoutSoldiersInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type SoldierCreateInput = {
  description?: InputJsonValue;
  name?: string | null;
  opinions?: OpinionCreateNestedManyWithoutSoldiersInput;
  team?: TeamWhereUniqueInput | null;
};
