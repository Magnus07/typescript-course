"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharactersCollection extends Sorter_1.Sorter {
    constructor(collection) {
        super();
        this.collection = collection;
    }
    get length() {
        return this.collection.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.collection[leftIndex].toLowerCase() >
            this.collection[rightIndex].toLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const chars = this.collection.split("");
        const leftHand = this.collection[leftIndex];
        chars[leftIndex] = this.collection[rightIndex];
        chars[rightIndex] = leftHand;
        this.collection = chars.join("");
    }
}
exports.CharactersCollection = CharactersCollection;
