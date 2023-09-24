import { BinaryOperation, Operation } from "./binaryOperation";
import Integer from "./integer";
import { TokenType } from "./lex";
import Token from "./token";

export default function parse(tokens: Token[]) {
  let result = new BinaryOperation();

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    switch (token.type) {
      case TokenType.integer:
        let int = new Integer(token.text);

        if (result.left === null) result.left = int;
        else result.right = int;

        break;
      case TokenType.plus:
        result.type = Operation.add;
        break;
      case TokenType.minus:
        result.type = Operation.sub;
        break;
      case TokenType.leftParenteses:
        let j = i;
        for (; j < tokens.length; j++)
          if (tokens[j].type === TokenType.rightParenteses) break;

        let subExpr = parse(tokens.slice(i + 1, j));

        if (result.left === null) result.left = subExpr;
        else result.right = subExpr;

        i = j;
    }
  }

  return result;
}
