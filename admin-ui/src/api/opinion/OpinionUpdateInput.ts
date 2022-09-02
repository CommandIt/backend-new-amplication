import { SoliderWhereUniqueInput } from "../solider/SoliderWhereUniqueInput";

export type OpinionUpdateInput = {
  energy?: number | null;
  positivity?: number | null;
  productivity?: number | null;
  solider?: SoliderWhereUniqueInput;
  text?: string | null;
};
