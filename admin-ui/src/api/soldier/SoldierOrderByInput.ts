import { SortOrder } from "../../util/SortOrder";

export type SoldierOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  teamId?: SortOrder;
  updatedAt?: SortOrder;
};
