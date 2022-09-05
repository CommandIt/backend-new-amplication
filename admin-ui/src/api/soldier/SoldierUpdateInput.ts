import { InputJsonValue } from "../../types";
import { OpinionUpdateManyWithoutSoldiersInput } from "./OpinionUpdateManyWithoutSoldiersInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type SoldierUpdateInput = {
  description?: InputJsonValue;
  name?: string | null;
  opinions?: OpinionUpdateManyWithoutSoldiersInput;
  team?: TeamWhereUniqueInput | null;
};
