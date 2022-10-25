import { mountains, findNameOfTallesMountain } from "./mountains";
import "./products";
import "./inventory";
import { calcAverageProductPrice, product } from "./products";

console.log(findNameOfTallesMountain(mountains));

const tallestMtn: string = findNameOfTallesMountain(mountains);

console.log(calcAverageProductPrice(product));

// console.log(findNameOfTallesMountain());

//example of interface inside another interface
// describe ojbect within objects
//interface Person {
//     name: string;
//     age: number;
//   }

//   interface Family {
//     parent1: Person;
//     parent2: Person;
//     sibling1?: Person;
//     sibling2?: Person;
//   }

//   // object inside of object
//   const andreasFamily: Family = {
//     parent1: {
//       name: "Julie",
//       age: 57,
//     },
//     parent2: {
//       name: "Mike",
//       age: 57,
//     },
//     sibling1: {
//       name: "Erik",
//       age: 32,
//     },
//   };
