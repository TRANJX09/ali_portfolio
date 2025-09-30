// let a = "hello";

// {
//   console.log(a);
//   var b = "Day is good";
// }
// console.log(b);

// let a = 45;
// {
//   let xz = 26;
//   {
//     console.log(xz);
//     {
//       var y = "Ali";
//     }
//   }
// }

// console.log(y);

let car = {
  name: "BMW",
};

let info = {
  age: 15,
  country: "Tajikistan",
};

Object.assign(car, info);
console.log(car);

let animal = {
  name: "elephant",
};

let x = Object.create(animal);

x.namee = "ali";

console.log(x.name, x.namee);
