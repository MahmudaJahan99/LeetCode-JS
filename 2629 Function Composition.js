var compose = function (functions) {
  // Returns a new function that takes an argument x and applies the functions in reverse order
  return function (x) {
    for (let i = functions.length - 1; i >= 0; i--) {
      x = functions[i](x);
    }
    return x;
  };
};
