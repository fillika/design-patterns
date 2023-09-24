export default class Integer {
  value: string;

  constructor(value: string) {
    this.value = value;
  }

  valueOf() {
    return parseInt(this.value);
  }
}
