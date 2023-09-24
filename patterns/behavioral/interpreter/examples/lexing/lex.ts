import Token from "./token";

export enum TokenType {
  integer = 0,
  plus,
  minus,
  leftParenteses,
  rightParenteses,
}

export function lex(expression: string) {
  let result = [];

  for (let i = 0; i < expression.length; i++) {
    let char = expression[i];

    switch (char) {
      case "+":
        result.push(new Token(TokenType.plus, char));
        break;
      case "-":
        result.push(new Token(TokenType.minus, char));
        break;
      case "(":
        result.push(new Token(TokenType.leftParenteses, char));
        break;
      case ")":
        result.push(new Token(TokenType.rightParenteses, char));
        break;
      case " ":
        break;
      default:
        let [integers, j] = getIntegers(expression, i);
        result.push(new Token(TokenType.integer, integers));
        i = j - 1;
    }
  }

  return result;
}

function isInteger(char: string) {
  return `0123456789`.includes(char);
}

function getIntegers(expression: string, position: number): [string, number] {
  let char = expression[position];
  let buffer = [char];

  while (position < expression.length) {
    position++;
    let nextChar = expression[position];

    if (nextChar !== undefined && isInteger(nextChar)) buffer.push(nextChar);
    else break;
  }

  return [buffer.join(""), position];
}
