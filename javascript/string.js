function thisIsAString() {
  return `This is a string.`
}

function nestedQuotes() {
  return `"This" is nested in quotes`
}

function stringInterpolation(name) {
  if(name == null) {
    return `Hello!`
  } else {
    return `Hello ${name}!`
  }
}