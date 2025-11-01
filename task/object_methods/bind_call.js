function a() {
  let inner = 5;
  return inner;
  function x() {
    inner++;
    console.log(inner);
  }
  return x;
}

let b = a();

console.log(b);

console.log(b);
