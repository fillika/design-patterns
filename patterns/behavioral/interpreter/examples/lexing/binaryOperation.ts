import Integer from "./integer";
import isNil from "./utils/isNil";

export enum Operation {
  add = 0,
  sub,
}

export class BinaryOperation {
  type: null | Operation;
  left: null | Integer | BinaryOperation;
  right: null | Integer | BinaryOperation;

  constructor() {
    this.type = null;
    this.left = null;
    this.right = null;
  }

  valueOf(): number {
    if (!isNil(this.left) && !isNil(this.right)) {
      let left = this.left.valueOf();
      let right = this.right.valueOf();

      switch (this.type) {
        case Operation.add:
          return left + right;
        case Operation.sub:
          return left - right;
      }
    }

    throw new Error("Incorrect expression");
  }
}
