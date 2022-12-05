import { DID } from "dids";
import { OptionsB } from "./optionsB";

export class ClassB {
  private _name: string;
  private _valueB: string;
  private _did: DID;

  constructor(options?: OptionsB) {
    this._name = options
      ? options.name
      : "empty";

    this._valueB = options
      ? options.valueB
      : "empty";

    this._did = new DID();
  }

  public get name() {
    return this._name;
  }

  public get valueB() {
    return this._valueB;
  }

  public get did() {
    return this._did;
  }
} 