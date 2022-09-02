import { OpinionCreateNestedManyWithoutSolidersInput } from "./OpinionCreateNestedManyWithoutSolidersInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type SoliderCreateInput = {
  name?: string | null;
  opinions?: OpinionCreateNestedManyWithoutSolidersInput;
  team?: TeamWhereUniqueInput | null;
};
