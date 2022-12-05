import { ClassA } from "@libs/lib-a";
import { ClassB } from "@libs/lib-b";

const objectA = new ClassA({ name: "name A", valueA: "AAA" });
const objectB = new ClassB({ name: "name B", valueB: "BBB" });

console.log({
  name: objectA.name,
  valueA: objectA.valueA,
})

console.log({
  name: objectB.name,
  valueB: objectB.valueB
})