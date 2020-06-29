import ms from "ms";
import { InvalidTimeFormat, InvalidParameter } from "./errors";

export class Fos {
  private _tempValue: Date;

  constructor(hr: number, min: number, sec: number, milli: number) {
    if (
      typeof hr !== "number" ||
      typeof min !== "number" ||
      typeof sec !== "number" ||
      typeof milli !== "number"
    ) {
      throw new InvalidParameter(
        "Invalid parameter, parameter type should be a number."
      );
    }

    this._tempValue = new Date(new Date().setHours(hr, min, sec, milli));
  }

  getValue() {
    return this._tempValue;
  }

  add(time: string) {
    const convertedTime = ms(time);

    if (isNaN(convertedTime)) {
      throw new InvalidTimeFormat();
    }

    return new Date(
      this._tempValue.setMilliseconds(
        this._tempValue.getMilliseconds() + convertedTime
      )
    );
  }

  subtract(time: string) {
    const convertedTime = Math.abs(ms(time));

    if (isNaN(convertedTime)) {
      throw new InvalidTimeFormat();
    }

    return new Date(
      this._tempValue.setMilliseconds(
        this._tempValue.getMilliseconds() - convertedTime
      )
    );
  }

  range(lowerBound: string = "0", upperBound: string = "0") {
    const lowerBoundTime = Math.abs(ms(lowerBound));
    const upperBoundTime = Math.abs(ms(upperBound));

    if (isNaN(lowerBoundTime)) {
      throw new InvalidTimeFormat();
    }

    if (isNaN(upperBoundTime)) {
      throw new InvalidTimeFormat();
    }

    const currentDate = new Date(this._tempValue.valueOf());

    const lower = new Date(
      currentDate.setMilliseconds(
        currentDate.getMilliseconds() - lowerBoundTime
      )
    );

    const upper = new Date(
      this._tempValue.setMilliseconds(
        this._tempValue.getMilliseconds() + upperBoundTime
      )
    );

    return [lower, upper];
  }
}
