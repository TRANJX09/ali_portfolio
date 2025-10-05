// метод object.preventExtensions делает тоже самое как freeze и seal но в нём можно и еще удалять свойство
// тоисть можно и удалять и изменять значение

let a = {
  info: "medium",
  AgeGaming: 4,
};

Object.preventExtensions(a);

a.info = "hard";

a.user = "Ali";

delete a.AgeGaming;

console.log(a);
