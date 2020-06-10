import fos from "./index";
import { InvalidParameter, InvalidTimeFormat } from "./errors";

describe("Test for lib", () => {
  describe("setup lib", () => {
    it("initialises with current day at midnight", () => {
      const dayAtMidnight = fos().value;
      const date = new Date(new Date().setHours(0, 0, 0, 0));

      expect(dayAtMidnight).toEqual(date);
    });

    it("set hour when provided", () => {
      const todayAt4 = fos(4).value;
      const date = new Date(new Date().setHours(4, 0, 0, 0));

      expect(todayAt4).toEqual(date);
    });

    it("set min when provided", () => {
      const quarterPastThree = fos(3, 15).value;
      const date = new Date(new Date().setHours(3, 15, 0, 0));

      expect(quarterPastThree).toEqual(date);
    });

    it("set milli(seconds) when provided", () => {
      const day = fos(3, 15, 45, 12).value;
      const date = new Date(new Date().setHours(3, 15, 45, 12));

      expect(day).toEqual(date);
    });

    it("throw an error when paramater is not a number", () => {
      // @ts-ignore
      expect(() => fos("32sasaka2")).toThrow(
        new InvalidParameter(
          "Invalid parameter, parameter type should be a number."
        )
      );
    });
  });

  describe("adds time to current date", () => {
    it("adds a day to current date", () => {
      const tommorrowAtMidnight = fos().add("1d").value;
      const date = new Date(
        new Date(new Date().setDate(new Date().getDate() + 1)).setHours(
          0,
          0,
          0,
          0
        )
      );

      expect(tommorrowAtMidnight).toEqual(date);
    });

    it("adds a week to current date", () => {
      const aWeekTodayAtMidnight = fos().add("1week").value;
      const date = new Date(
        new Date(new Date().setDate(new Date().getDate() + 7)).setHours(
          0,
          0,
          0,
          0
        )
      );

      expect(aWeekTodayAtMidnight).toEqual(date);
    });

    it("adds a day to current date at 5", () => {
      const tommorrowAt5 = fos(5).add("1d").value;
      const date = new Date(
        new Date(new Date().setDate(new Date().getDate() + 1)).setHours(
          5,
          0,
          0,
          0
        )
      );

      expect(tommorrowAt5).toEqual(date);
    });

    it("throws an error when parameter for add is invalid", () => {
      expect(() => fos().add("ldsk")).toThrow(
        new InvalidTimeFormat(
          "time format is not valid. check here for more info. https://github.com/zeit/ms#readme"
        )
      );
    });
  });

  describe("subtracts time to current date", () => {
    it("subtracts a day from current date", () => {
      const yesterdayAtMidnight = fos().subtract("1d").value;
      const date = new Date(
        new Date(new Date().setDate(new Date().getDate() - 1)).setHours(
          0,
          0,
          0,
          0
        )
      );

      expect(yesterdayAtMidnight).toEqual(date);
    });

    it("subtract a week from current date", () => {
      const aWeekAgoAtMidnight = fos().subtract("1week").value;
      const date = new Date(
        new Date(new Date().setDate(new Date().getDate() - 7)).setHours(
          0,
          0,
          0,
          0
        )
      );

      expect(aWeekAgoAtMidnight).toEqual(date);
    });

    it("subtact a day from current date at 5", () => {
      const yesterdayAt5 = fos(5).subtract("1d").value;
      const date = new Date(
        new Date(new Date().setDate(new Date().getDate() - 1)).setHours(
          5,
          0,
          0,
          0
        )
      );

      expect(yesterdayAt5).toEqual(date);
    });

    it("throws an error when parameter for subtract is invalid", () => {
      expect(() => fos().add("s90dsk")).toThrow(
        new InvalidTimeFormat(
          "time format is not valid. check here for more info. https://github.com/zeit/ms#readme"
        )
      );
    });
  });

  describe("range between date interval", () => {
    it("return date range between today and next five days", () => {
      const rangeFromTodayToNextFiveDays = fos().range("0", "5d").value;
      const today = new Date(
        new Date(new Date().setDate(new Date().getDate())).setHours(0, 0, 0, 0)
      );
      const nextFiveDays = new Date(
        new Date(new Date().setDate(new Date().getDate() + 5)).setHours(
          0,
          0,
          0,
          0
        )
      );

      expect(rangeFromTodayToNextFiveDays).toEqual([today, nextFiveDays]);
    });

    it("returns range from five days ago till date", () => {
      const rangeFromFiveDaysAgoToToday = fos().range("5d", "0").value;
      const fiveDaysAgo = new Date(
        new Date(new Date().setDate(new Date().getDate() - 5)).setHours(
          0,
          0,
          0,
          0
        )
      );
      const today = new Date(
        new Date(new Date().setDate(new Date().getDate())).setHours(0, 0, 0, 0)
      );

      expect(rangeFromFiveDaysAgoToToday).toEqual([fiveDaysAgo, today]);
    });

    it("return a range five days Ago to to next five days", () => {
      const rangeFromFiveDaysAgoToNextFiveDays = fos().range("-5d", "5d").value;
      const fiveDaysAgo = new Date(
        new Date(new Date().setDate(new Date().getDate() - 5)).setHours(
          0,
          0,
          0,
          0
        )
      );
      const nextFiveDays = new Date(
        new Date(new Date().setDate(new Date().getDate() + 5)).setHours(
          0,
          0,
          0,
          0
        )
      );

      expect(rangeFromFiveDaysAgoToNextFiveDays).toEqual([
        fiveDaysAgo,
        nextFiveDays,
      ]);
    });
  });
});
