// метод Object.freeze просто замороживает, ничего удалять либо изменять нельзя, только можно читать

let a = {
  name: "Gumi",
  age: 16,
};
Object.freeze(a);
a.name = "Ali";

console.log(a);
