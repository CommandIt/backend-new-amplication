import { Opinion as TOpinion } from "../api/opinion/Opinion";

export const OPINION_TITLE_FIELD = "id";

export const OpinionTitle = (record: TOpinion): string => {
  return record.id || record.id;
};
