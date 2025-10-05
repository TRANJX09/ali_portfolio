// метод Object.seal запечатыввает объект, и нельзя добавить либо удалить значение, только можно
// читать, и имзенять старые значение

let a = {
  user: "Admin",
  position: "General",
  age: 56,
};

a.user = "NoAdmin";

Object.seal(a);

a.job = "Gamer";

console.log(a);
