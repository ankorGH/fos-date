import { Fos } from "./Fos";

export const fos = function (
  hr: number = 0,
  min: number = 0,
  sec: number = 0,
  milli: number = 0
) {
  return new Fos(hr, min, sec, milli);
};
