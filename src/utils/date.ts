import { format, parseISO, compareDesc } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

export const DateFormat = {
  YearMonthDate: "yyyy-MM-dd",
};
type DateFormat = typeof DateFormat[keyof typeof DateFormat];

export const toUtc = (date: string): Date => parseISO(date);

export const toJst = (date: string | Date): Date => {
  const utcDate = typeof date === "string" ? toUtc(date) : date;
  return utcToZonedTime(utcDate, "Asia/Tokyo");
};

export const jstToStr = (date: Date, dateFormat: DateFormat): string => format(date, dateFormat);

export const utcToStr = (date: string | Date, dateFormat: DateFormat): string => {
  const utcDate = typeof date === "string" ? toUtc(date) : date;
  return jstToStr(toJst(utcDate), dateFormat);
};

export const sortDateByDesc = (a: number | Date, b: number | Date) => compareDesc(a, b);
