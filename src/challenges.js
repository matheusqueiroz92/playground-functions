// Desafio 1
function compareTrue(value1, value2) {
    let resultComparation;
    if (value1 === true && value2 === true) {
        resultComparation = true;
    } else {
        resultComparation = false;
    }
   return resultComparation;
}
//console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
    let resultArea = base * height/2;
    return resultArea;
}
//console.log(calcArea(51, 1));

// Desafio 3

function splitSentence(nomeString) {
  let arrString = [];
  arrString = arrString.from(nomeString);
  //for (i = 0; i < nomeString.length; i += 1) {
    //if (nomeString.indexof(' ')) {
      //let arrString = arrString.from(i);
    //}
  return arrString;
}
console.log(splitSentence('Eu sou Matheus'));


// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
