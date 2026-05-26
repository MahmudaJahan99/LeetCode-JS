async function sleep(millis) {
  // Returns a promise that resolves after a specified number of milliseconds
  return new Promise((resolve) => setTimeout(resolve, millis));
}
