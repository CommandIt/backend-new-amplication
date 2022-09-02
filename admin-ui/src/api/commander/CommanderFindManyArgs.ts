import { CommanderWhereInput } from "./CommanderWhereInput";
import { CommanderOrderByInput } from "./CommanderOrderByInput";

export type CommanderFindManyArgs = {
  where?: CommanderWhereInput;
  orderBy?: Array<CommanderOrderByInput>;
  skip?: number;
  take?: number;
};
