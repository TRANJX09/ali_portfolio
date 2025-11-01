// метод Object.defineProperties используется для того чтобы изменять его свойства и настроек, и может
// сразу изменить несколько объектов

let book = {};

Object.defineProperties(book, {
  name: {
    value: "JavaScript for Beginners",
    writable: false,
  },
  pages: {
    value: 250,
    writable: true,
  },
});
console.log(book.pages);
console.log(book.name);

book.name = "daaaaa";
book.pages = "странцы работают";
console.log(book.name, book.pages);

const counter = 0;

let count = {
  name: "Ali",
};
