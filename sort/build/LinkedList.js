"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
class NodeItem {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
    }
    add(value) {
        if (this.head === null) {
            let nodeItem = new NodeItem(value);
            this.head = nodeItem;
            return;
        }
        let node = this.head;
        while (node.next) {
            node = node === null || node === void 0 ? void 0 : node.next;
        }
        node.next = new NodeItem(value);
    }
    get length() {
        let counter = 0;
        let node = this.head;
        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }
    at(index) {
        if (!this.head) {
            throw new Error("List is empty!");
        }
        let node = this.head;
        let counter = 0;
        while (node) {
            if (counter === index) {
                return node;
            }
            node = node.next;
            counter++;
        }
        throw new Error("No element with such index!");
    }
    compare(leftHand, rightHand) {
        return this.at(leftHand).data > this.at(rightHand).data;
    }
    swap(leftHand, rightHand) {
        let leftNode = this.at(leftHand);
        let rightNode = this.at(rightHand);
        let leftHandValue = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHandValue;
    }
    print() {
        if (!this.head) {
            return;
        }
        let node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
}
exports.LinkedList = LinkedList;
