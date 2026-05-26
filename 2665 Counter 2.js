var createCounter = function (init) {
  let count = init;

  // closure
  return {
    increment: () => ++count,
    reset: () => (count = init),
    decrement: () => --count,
  };
};
