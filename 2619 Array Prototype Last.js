// -------------------- MY SOLUTION --------------------
function ArrayPrototypeLast(arr) {
  // If there are no elements in the array, it should return -1
  if (arr.length === 0) return -1;

  return arr[arr.length - 1];
}

// -------------------- LEETCODE SOLUTION --------------------
Array.prototype.last = function () {
  if (this.length === 0) {
    return -1;
  }

  return this[this.length - 1];
};
