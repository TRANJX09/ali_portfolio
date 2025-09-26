// If5. Даны три целых числа. Найти количество положительных и количество
// отрицательных чисел в исходном наборе.

let a = 5;
let b = -9;
let c = 15;

plusNumders = 0;
minusNumbers = 0;

if (a > 0) {
  plusNumders = plusNumders + 1;
} else if (a < 0) {
  minusNumbers = minusNumbers + 1;
}

if (b > 0) {
  plusNumders = plusNumders + 1;
} else if (b < 0) {
  minusNumbers = minusNumbers + 1;
}

if (c > 0) {
  plusNumders = plusNumders + 1;
} else if (c < 0) {
  minusNumbers = minusNumbers + 1;
}

console.log(plusNumders);
console.log(minusNumbers);
