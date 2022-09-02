import { SoliderWhereInput } from "./SoliderWhereInput";
import { SoliderOrderByInput } from "./SoliderOrderByInput";

export type SoliderFindManyArgs = {
  where?: SoliderWhereInput;
  orderBy?: Array<SoliderOrderByInput>;
  skip?: number;
  take?: number;
};
