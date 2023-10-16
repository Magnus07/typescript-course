import { readFileSync } from "fs";

export class CsvFileReader {
  data: string[][] = [];

  constructor(private filename: string) {}

  read(): void {
    this.data = readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      });
  }
}
