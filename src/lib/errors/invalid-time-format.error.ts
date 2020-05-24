export class InvalidTimeFormat extends Error {
  constructor(
    message: string = "time format is not valid. check here for more info. https://github.com/zeit/ms#readme"
  ) {
    super(message);
  }
}
