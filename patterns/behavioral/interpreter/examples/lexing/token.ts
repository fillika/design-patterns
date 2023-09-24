import { TokenType } from "./lex";

class Token {
  type: TokenType;
  text: string;

  constructor(type: TokenType, text: string) {
    this.type = type;
    this.text = text;
  }

  toString() {
    return `'${this.text}' && type: '${this.type}'`;
  }
}

export default Token;
