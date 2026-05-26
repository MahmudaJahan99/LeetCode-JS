var fibGenerator = function* () {
  let a = 0,
    b = 1;

  // The generator will yield the next Fibonacci number indefinitely, so we use an infinite loop.
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
};
