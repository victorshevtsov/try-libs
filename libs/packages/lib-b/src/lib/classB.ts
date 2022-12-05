import Arweave from "arweave";
import { DID } from "dids";
import { OptionsB } from "./optionsB";

export class ClassB {
  private _name: string;
  private _valueB: string;
  private _arweave: Arweave;
  private _did: DID;

  constructor(arweave: Arweave, options?: OptionsB) {
    this._name = options
      ? options.name
      : "empty";

    this._valueB = options
      ? options.valueB
      : "empty";

    this._arweave = arweave;
    this._did = new DID();
  }

  public get name() {
    return this._name;
  }

  public get valueB() {
    return this._valueB;
  }

  public get arweave() {
    return this._arweave;
  }

  public get did() {
    return this._did;
  }
} 