import { Team } from "../team/Team";
import { User } from "../user/User";

export type Commander = {
  createdAt: Date;
  id: string;
  name: string | null;
  team?: Team | null;
  updatedAt: Date;
  user?: User;
};
