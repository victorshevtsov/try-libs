import { OptionsA } from "./optionsA";

export class ClassA {
  private _name: string;
  private _valueA: string;

  constructor(options?: OptionsA) {
    this._name = options
      ? options.name
      : "empty";

    this._valueA = options
      ? options.valueA
      : "empty";
  }

  public get name() {
    return this._name;
  }

  public get valueA() {
    return this._valueA;
  }
}