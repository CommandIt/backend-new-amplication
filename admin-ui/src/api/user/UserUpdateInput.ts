import { CommanderUpdateManyWithoutUsersInput } from "./CommanderUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  commanders?: CommanderUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
