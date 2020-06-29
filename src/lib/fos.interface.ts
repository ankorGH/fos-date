export interface FosInterface {
  value: Date;
  add: (time: string) => FosInterface;
  subtract: (time: string) => FosInterface;
  range: (lowerBoundTime: string, upperBoundTime: string) => FosInterface;
}
