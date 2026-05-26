var reduce = function (nums, fn, init) {
  // If the input array is empty, return the initial value
  if (nums.length === 0) return init;

  let val = init;

  // Iterate through each element in the array and apply the function to the current value and the element
  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }
  return val;
};
