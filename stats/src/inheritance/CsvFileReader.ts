import { readFileSync } from "fs";

export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(private filename: string) {}

  read(): void {
    this.data = readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map(this.mapRow);
  }

  abstract mapRow(row: string[]): T;
}
