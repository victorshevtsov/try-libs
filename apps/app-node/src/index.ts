import { ClassA } from "@libs/lib-a";
import { ClassB } from "@libs/lib-b";
import Arweave from "arweave";

const arweave = new Arweave({});

const objectA = new ClassA({ name: "name A", valueA: "AAA" });
const objectB = new ClassB(arweave, { name: "name B", valueB: "BBB" });

console.log({
  name: objectA.name,
  valueA: objectA.valueA,
})

console.log({
  name: objectB.name,
  valueB: objectB.valueB,
  arweaveConfig: objectB.arweave.getConfig(),
  did: objectB.did
})