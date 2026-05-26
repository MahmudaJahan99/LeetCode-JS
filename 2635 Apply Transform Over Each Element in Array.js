var map = function (arr, fn) {
  let returnedArray = [];

  // Iterate through the array and apply the function to each element
  for (let i = 0; i < arr.length; i++) {
    returnedArray.push(fn(arr[i], i));
  }

  return returnedArray;
};
