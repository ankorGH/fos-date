export interface fos {
  value: Date;
  add: (time: string) => fos;
  subtract: (time: string) => fos;
}
