import { SoldierWhereInput } from "./SoldierWhereInput";
import { SoldierOrderByInput } from "./SoldierOrderByInput";

export type SoldierFindManyArgs = {
  where?: SoldierWhereInput;
  orderBy?: Array<SoldierOrderByInput>;
  skip?: number;
  take?: number;
};
