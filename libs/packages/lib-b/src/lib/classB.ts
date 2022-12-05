import { OptionsB } from "./optionsB";

export class ClassB {
  private _name: string;
  private _valueB: string;

  constructor(options?: OptionsB) {
    this._name = options
      ? options.name
      : "empty";

    this._valueB = options
      ? options.valueB
      : "empty";
  }

  public get name() {
    return this._name;
  }

  public get valueB() {
    return this._valueB;
  }
}