import { OutputTarget } from "../Summary";
import { writeFileSync } from "fs";

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
        <div>
        <h1>Report result</h1>
        <h3>${report}</h3>
        </div>
        `;
    writeFileSync("report.html", html);
  }
}
