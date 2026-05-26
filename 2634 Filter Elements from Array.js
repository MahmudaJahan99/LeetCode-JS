var filter = function (arr, fn) {
  let newArray = [];

  // Iterate through the array and apply the function to each element
  for (let i = 0; i < arr.length; i++) {
    // If the function returns true, add the element to the new array
    if (fn(arr[i], i)) {
      newArray.push(arr[i]);
    }
  }
  
  return newArray;
};
