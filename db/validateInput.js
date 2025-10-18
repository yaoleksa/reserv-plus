function validateInput(fn, bd) {
  // Remove extra spaces and split full bname with space
  const fnSplited = fn.replace(/\s+/g, ' ').replace(/\s+$/g, '').replace(/^\s+/g, '').split(' ');
  // Return the result of validation
  return fnSplited.length !== 3 || bd.length !== 3 || bd[0].length !== 2 || bd[1].length !== 2 || bd[2].length !== 4 || parseInt(bd[0]) > 31 ||
  parseInt(bd[1]) > 12;
}
