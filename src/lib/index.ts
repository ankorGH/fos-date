import ms from "ms";
import { InvalidTimeFormat } from "./errors";
import { fos } from "./fos.interface";

export default function fos(
  this: any,
  hr: number = 0,
  min: number = 0,
  sec: number = 0,
  milli: number = 0
): fos {
  this.value = new Date(new Date().setHours(hr, min, sec, milli));
  this._tempValue = new Date(this.value.valueOf());

  this._resetTempDate = () => {
    this._tempValue = new Date(this.value.valueOf());
  };

  this.add = (time: string) => {
    this._resetTempDate();

    const convertedTime = ms(time);

    if (!convertedTime) {
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

    const convertedTime = ms(time);

    if (!convertedTime) {
      throw new InvalidTimeFormat();
    }

    this.value = new Date(
      this._tempValue.setMilliseconds(
        this._tempValue.getMilliseconds() + convertedTime
      )
    );

    return this;
  };

  return this;
}
