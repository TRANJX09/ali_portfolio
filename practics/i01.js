// let redmi = {
//   ram: 128,
//   storage: 128,
//   name: "Mi",
// };

// let iphone = Object.create(redmi)

// Object.assign(redmi, { vram: 16 });

// console.log(iphone);
// let Poco = {
//   storage: 512,
//   ram: 16,
//   cam: 64,
// };

// let redmi = {
//   aaa: "oajsdoij",
//   wdd: 12,
// };

// Object.create();

// console.log(redmi);

// let book = {}
// Object.defineProperties(book, {
// tittle : "JS Guide",
//   enumerable: true,
//   writable: false
// }
// author: {
//     name: "Alex"
//     writable: true,
//     enumerable: false
// }
// )

// const car = {
//   brand: "Toyota",
//   year: 2020,
// };
// console.log(Object.entries(car));

// let human = {
//   age: 16,
//   name: "Ali",
//   hobby: "Gaming, Programmist",
//   namePhone: "Poco",
// };

// console.log(Object.entries(human));

// let human = {
//   age: 16,
//   name: "Ali",
//   hobby: "Gaming, Programmist",
//   namePhone: "Poco",
// };

// let chel = Object.create(human)
// chel.up = 100

// console.log(Object.is(chel.up, 100));

// const user = {
//   name: "Ali",
//   age: 16,
//   hobby: "Gaming"
// };

// console.log(user)

// let obj1 = {
//   name: "Ali",
//   ahe: 16
// }

// let human = {};

// Object.defineProperties(human, {
//   name: {
//     value: "Ali",
//     enumerable: false,
//     writable: true,
//     configurable: true,
//   },
//   age: {
//     value: 16,
//     enumerable: false,
//     writable: true,
//     configurable: true,
//   },
//   hobby: {
//     value: "Programmer",
//     enumerable: false,
//     writable: true,
//     configurable: true,
//   },
// });

// console.log(human);

// string.prototype.split1 = function(count) {

// }

// let name = Symbol()

// let y = {
//     name: "Ali",
//     age: 19,
//     [name]: "Amir"
// }

// console.log(y.name)
// console.log(y[name])

// let Array = [5,-3,12, 0, 7, 12, -1]
// let res = Array.map((y)=> y ** 2);
// console.log(res)
// let nums = [5,-3,12, 0, 7, 12, -1]
// let ras = Array.filter((nums) => 0)
// console.log(ras)
// console.log(nums);

// let numbers = [2, 5, 7, 10];
// let num5x = numbers.map((a) => a * 5);
// console.log(num5x);

// let words = ["apple", "banana", "kiwi"];
// let UpWords = words.map((a) => a.toUpperCase());
// console.log(UpWords);

// let users = [
//   { name: "Ali", age: 18 },
//   { name: "Mansur", age: 19 },
//   { name: "Amir", age: 20 },
// ];
// let UserAge = users.map( users => users.age)
// console.log(UserAge)

// let fruits = "яблоко апельсин груша банан"
// let ms = fruits.split(" ")

// console.log(ms);

// let languages = "html,css,javascript,python"
// let ms1 = languages.split(" ")
// console.log(ms1);

// let word = "Привет"
// let ms2 = word.split("")
// console.log(ms2);

// let product = "молоко:хлеб:сыр:масло"
// let ms3 = product.split(":")
// console.log(ms3);

// let numbers = "один два три четыре пять"
// let ms4 = numbers.split(" ", 2)
// console.log(ms4);

// let numbers = "2025-09-02";
// let num1 = numbers.split("-");
// console.log(num1);

// let user = "имя:Али;возраст:16;класс:9";
// let us1 = user.split(";", ":");
// console.log(us1);

// let aaa = "a,b,c,d,e,f"
// let bbb = aaa.split(",", 3)
// console.log(bbb)

// let word = ["apple" , "banana", "grades" , ]
// let ms = word.map(word => word.length )
// console.log(word);

// let fruits = new Set(["яблоко", "банан", "киви"]);
// for (let f of fruits) {
//   console.log(f);
// }

// fruits.forEach(f => console.log(f))

// let numbers = [1, 2, 3, 2, 1];
// let uniqies = new Set([1, 2, 3, 2, 1]);
// console.log(uniqies);

// uniqies.delete(2);
// console.log(uniqies);

// console.log(uniqies.has(2));

// let langs = ["html", "css", "js", "css", "html", "python"];
// let unik = [...new Set(langs)];
// console.log(unik);

// let arr1 = [1, 2, 3, 4];
// let arr2 = [3, 4, 5, 6];
// let allarr = new Set(arr1)
// let ab = arr2.filter(a => allarr.has(a))
// console.log(ab)

// function rekurs(r) {
//   if (r === 0) {
//     console.log("stop");
//     return;
//   }
//   console.log(r);
//   rekurs(r - 1);
// }
// rekurs(1500);

// function recurs(a) {
//   if (a === 0) {
//     console.log("ИДИ Стоп")
//     return;
//   }
//   console.log(a)
//   recurs(a - 1)
// }
// recurs(10)

// function fc(s) {
//   if (s === 0) return 1;
//   return s * fc(s - 1)
// }
// console.log(fc(5))

// function rekurs(e) {
//   if (e === 0) {
//     return;
//   }
//   console.log(e);
//   rekurs(e - 1);
// }
// rekurs(5);

// function fplus(a) {
//   if (a === 0) return 1;
//   return a + fplus(a - 1);
// }
// console.log(fplus(10));

// function faktorial(s) {
//   if (s === 0) return 1;
//   return s * faktorial(s - 1);ч
// }
// console.log(faktorial(5));

// let arr = [1, [2, [3, [4]]]];
// function arr(d) {

// }

// function power(a, b) {
//   if (b === 0) return 1;
//   return a * power(a, b - 1);
// }

// console.log(power(5,2));

// function rev(s) {
//   if (s.length <= 1) {
//     return s;
//   }
//   return s[s.length - 1] + rev(s.slice(0, -1));
// }

// console.log(rev("alijon"));

// let map = new Map([
//   ["Таджикистан", "Душанбе"],
//   ["Россия", "Москва"],
//   ["Китай", "Пекин"],
// ]);

// console.log(map.get("Россия"));

// let nums = [1, 2, 2, 3, 4, 4, 5];
// let unik = new Set(nums);
// unik.delete(3);

// console.log(unik);
// console.log(unik.has(5));


// let weakMap = new WeakMap();

// let user = {name: "Ali"}
// weakMap.set(user, "Amir")

// console.log(weakMap.get(user))











