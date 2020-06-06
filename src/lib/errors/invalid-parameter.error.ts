export class InvalidParameter extends Error {
  constructor(message: string = "invalid parameter") {
    super(message);
  }
}
