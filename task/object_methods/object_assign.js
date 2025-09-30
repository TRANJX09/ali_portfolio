// в кратке метод Object.assign просто копирует готовый объект и добавляет в новый, и может добавить либо
// изменить значение

let car = {
  name: "BMW",
};

let info = {
  age: 15,
  country: "Tajikistan",
};

Object.assign(car, info);
console.log(car);
