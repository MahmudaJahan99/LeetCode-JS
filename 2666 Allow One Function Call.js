var once = function (fn) {
  // Track if the function has been called before
  let iCalled = false;

  // Return a new function that wraps the original function
  return function (...args) {
    // If the function has already been called, return undefined
    if (iCalled === true) return undefined;

    // Mark the function as called and invoke the original function with the provided arguments
    iCalled = true;
    return fn(...args);
  };
};
