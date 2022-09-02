import { Commander } from "../commander/Commander";

export type User = {
  commanders?: Array<Commander>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
