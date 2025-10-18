function validateInput(fn, bd) {
  // Return the result of validation
  return fn.length !== 3 || bd.length !== 3 || bd[0].length !== 2 || bd[1].length !== 2 || bd[2].length !== 4 || parseInt(bd[0]) > 31 ||
  parseInt(bd[1]) > 12;
}
