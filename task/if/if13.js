// If13. Даны три числа. Найти среднее из них (то есть число, расположенное
// между наименьшим и наибольшим).

let a = 16;
let b = 25;
let c = 6;

if (a > b && a < c) {
  console.log(a);
} else if (a < b && a > c) {
  console.log(a);
} else if (b > a && b < c) {
  console.log(b);
} else if (b < a && b > c) {
  console.log(b);
} else if (c > a && c < b) {
  console.log(c);
} else if (c < a && c > b) {
  console.log(c);
}
