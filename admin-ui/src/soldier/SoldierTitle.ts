import { Soldier as TSoldier } from "../api/soldier/Soldier";

export const SOLDIER_TITLE_FIELD = "name";

export const SoldierTitle = (record: TSoldier): string => {
  return record.name || record.id;
};
