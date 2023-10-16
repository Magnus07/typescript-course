"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReport = void 0;
const fs_1 = require("fs");
class HtmlReport {
    print(report) {
        const html = `
        <div>
        <h1>Report result</h1>
        <h3>${report}</h3>
        </div>
        `;
        (0, fs_1.writeFileSync)("report.html", html);
    }
}
exports.HtmlReport = HtmlReport;
