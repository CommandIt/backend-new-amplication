import { Commander as TCommander } from "../api/commander/Commander";

export const COMMANDER_TITLE_FIELD = "name";

export const CommanderTitle = (record: TCommander): string => {
  return record.name || record.id;
};
