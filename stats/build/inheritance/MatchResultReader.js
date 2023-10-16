"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchResultReader = void 0;
const utils_1 = require("../utils");
const CsvFileReader_1 = require("./CsvFileReader");
class MatchResultReader extends CsvFileReader_1.CsvFileReader {
    mapRow(row) {
        return [
            (0, utils_1.dateStringToDate)(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6],
        ];
    }
}
exports.MatchResultReader = MatchResultReader;
