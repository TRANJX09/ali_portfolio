// метод Object.fromentries делает только из пар массивов объект если там одно значение

let a = [
  ["name", "Ali"],
  ["age", 16],
];

let ms = Object.fromEntries(a);

console.log(ms);
