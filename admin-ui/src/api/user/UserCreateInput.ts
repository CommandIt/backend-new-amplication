import { CommanderCreateNestedManyWithoutUsersInput } from "./CommanderCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  commanders?: CommanderCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};
