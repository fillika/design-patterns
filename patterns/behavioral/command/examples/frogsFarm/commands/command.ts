type ExecuteCb = (...args: any) => any;

export default class Command {
  execute: ExecuteCb;

  constructor(executeCb: ExecuteCb) {
    this.execute = executeCb;
  }
}
