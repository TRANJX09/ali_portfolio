// методы Object.isFrozen isSealed isExtensible
// isFrozen проверяет заморожен ли объект
// isSealed проверяет запечатан ли объект
// isExtensible проверяет можно ли добавлять значение

let a = {
  name: "Ali",
  age: 19,
  hobby: "Programmer",
};

console.log(Object.isFrozen(a));
console.log(Object.isExtensible(a));

Object.freeze(a);

console.log(Object.isSealed(a));
