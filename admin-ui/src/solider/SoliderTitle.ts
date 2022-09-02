import { Solider as TSolider } from "../api/solider/Solider";

export const SOLIDER_TITLE_FIELD = "name";

export const SoliderTitle = (record: TSolider): string => {
  return record.name || record.id;
};
