import { OpinionWhereInput } from "./OpinionWhereInput";
import { OpinionOrderByInput } from "./OpinionOrderByInput";

export type OpinionFindManyArgs = {
  where?: OpinionWhereInput;
  orderBy?: Array<OpinionOrderByInput>;
  skip?: number;
  take?: number;
};
