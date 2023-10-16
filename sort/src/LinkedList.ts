import { Sorter } from "./Sorter";

class NodeItem {
  constructor(public data: number) {}
  next: NodeItem | null = null;
}

export class LinkedList extends Sorter {
  head: NodeItem | null = null;

  add(value: number): void {
    if (this.head === null) {
      let nodeItem = new NodeItem(value);
      this.head = nodeItem;
      return;
    }

    let node: NodeItem | null = this.head;
    while (node.next) {
      node = node?.next;
    }
    node.next = new NodeItem(value);
  }

  get length(): number {
    let counter = 0;

    let node: NodeItem | null = this.head;
    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  at(index: number): NodeItem {
    if (!this.head) {
      throw new Error("List is empty!");
    }

    let node: NodeItem | null = this.head;
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

  compare(leftHand: number, rightHand: number): boolean {
    return this.at(leftHand).data > this.at(rightHand).data;
  }

  swap(leftHand: number, rightHand: number): void {
    let leftNode = this.at(leftHand);
    let rightNode = this.at(rightHand);
    let leftHandValue = leftNode.data;

    leftNode.data = rightNode.data;
    rightNode.data = leftHandValue;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: NodeItem | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
