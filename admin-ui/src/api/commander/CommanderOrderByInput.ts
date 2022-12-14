import { SortOrder } from "../../util/SortOrder";

export type CommanderOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  teamId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
