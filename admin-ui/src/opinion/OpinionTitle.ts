import { Opinion as TOpinion } from "../api/opinion/Opinion";

export const OPINION_TITLE_FIELD = "text";

export const OpinionTitle = (record: TOpinion): string => {
  return record.text || record.id;
};
