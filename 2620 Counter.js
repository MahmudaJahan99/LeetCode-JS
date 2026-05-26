// -------------------- MY SOLUTION --------------------
const counter = function (n) {
  return function () {
    return n++;
  };
};

// -------------------- LEETCODE SOLUTION --------------------
var createCounter = function (n) {
  return function () {
    return n++;
  };
};
