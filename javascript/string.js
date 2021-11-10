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
function textLength(text= "") {
  return text.length
}

function printEachCharacter(text= "") {
  for( let i = 0; i < text.length; i++) {
    console.log(text[i])
  }
}

function upperCaseExample(text="") {
  return text.toUpperCase()
}

function lowerCaseExample(text="") {
  return text.toLowerCase()
}