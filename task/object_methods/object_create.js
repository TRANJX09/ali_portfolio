// метод object.create создаёт прототипа, а сам прототип будет брать все свойства или значение у родителя
// по ссылке, и если родитель изменится то он тоже изменится

let user = {
  person: "Ali",
};

let SayName = Object.create(user);

console.log(SayName.person);

let animal = {
  sound: "meow",
};

let cat = Object.create(animal);
console.log(cat.sound);

cat.sound = "purr";

console.log(cat.sound);
console.log(cat.hasOwnProperty("sound"));
