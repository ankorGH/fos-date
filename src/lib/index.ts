import ms from "ms";
import { InvalidTimeFormat, InvalidParameter } from "./errors";
import { FosInterface } from "./fos.interface";

export const fos = function (
  this: any,
  hr: number = 0,
  min: number = 0,
  sec: number = 0,
  milli: number = 0
): FosInterface {
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

  this.value = new Date(new Date().setHours(hr, min, sec, milli));
  this._tempValue = new Date(this.value.valueOf());

  this._resetTempDate = () => {
    this._tempValue = new Date(this.value.valueOf());
  };

  this.add = (time: string) => {
    this._resetTempDate();

    const convertedTime = ms(time);

    if (isNaN(convertedTime)) {
      throw new InvalidTimeFormat();
    }

    this.value = new Date(
      this._tempValue.setMilliseconds(
        this._tempValue.getMilliseconds() + convertedTime
      )
    );

    return this;
  };

  this.subtract = (time: string) => {
    this._resetTempDate();

    const convertedTime = Math.abs(ms(time));

    if (isNaN(convertedTime)) {
      throw new InvalidTimeFormat();
    }

    this.value = new Date(
      this._tempValue.setMilliseconds(
        this._tempValue.getMilliseconds() - convertedTime
      )
    );

    return this;
  };

  this.range = (lowerBound: string = "0", upperBound: string = "0") => {
    this._resetTempDate();

    const lowerBoundTime = Math.abs(ms(lowerBound));
    const upperBoundTime = Math.abs(ms(upperBound));

    if (isNaN(lowerBoundTime)) {
      throw new InvalidTimeFormat();
    }

    if (isNaN(upperBoundTime)) {
      throw new InvalidTimeFormat();
    }

    const lower = new Date(
      this._tempValue.setMilliseconds(
        this._tempValue.getMilliseconds() - lowerBoundTime
      )
    );

    this._resetTempDate();

    const upper = new Date(
      this._tempValue.setMilliseconds(
        this._tempValue.getMilliseconds() + upperBoundTime
      )
    );

    this.value = [lower, upper];

    return this;
  };

  return this;
};
