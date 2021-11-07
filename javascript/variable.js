/*
VARIABLES

*/

function letExample() {
  let age = 75

  return age
}

function constExample() {
  const age = 75

  age++ // This will return an error. We can't alter constants.

  return age
}
