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
  arrayString = nomeString.split([' ']);
  return arrayString;
}
//console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(arrayNames) {
  primeiroUltimo = arrayNames[arrayNames.length - 1] + ', ' + arrayNames[0];
  return primeiroUltimo;
}
//console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  points = wins*3 + ties*1;
  return points;
}
//console.log(footballPoints(1, 2));

// Desafio 6
function highestCount(arrayNumbers) {
  let nVezes = 0;
  let maiorNumero = Math.max(...arrayNumbers);
  for (i = 0; i < arrayNumbers.length; i +=1) {
    arrayNumbers[i];
    if (arrayNumbers[i] == maiorNumero) {
      nVezes += 1;
    }
  }
  return nVezes;
}
//console.log(highestCount([9, 9, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } 
  else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  } 
  else  {
    return 'os gatos trombam e o rato foge';
  }
}
//console.log(catAndMouse(0,3,6));

// Desafio 8
function fizzBuzz(arrayPhone) {
  for (i = 0; i < arrayPhone.length; i +=1) {
    arrayPhone[i];
    if (((arrayPhone[i] % 3) == 0) && ((arrayPhone[i] % 5) == 0)) {
      arrayPhone.splice(i,1,"fizzBuzz");
    }
    else if ((arrayPhone[i] % 3) == 0) {
      arrayPhone.splice(i,1,"fizz");
    }
    else if ((arrayPhone[i] % 5) == 0) {
      arrayPhone.splice(i,1,"buzz");
    }
    else {
      arrayPhone.splice(i,1,"bug!");
    }
  }
  return arrayPhone;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

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
