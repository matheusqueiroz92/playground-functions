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
//console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(msgString) {
    let msgMod;
    msgMod = msgString.split('');
    msgMod = msgString.replace(/a/g,1).replace(/e/g,2).replace(/i/g,3).replace(/o/g,4).replace(/u/g,5); 
    return msgMod;
}
//console.log(encode('hi there!'));

function decode(msgString2) {
    let msgRev;
    msgRev = msgString2.split('');
    msgRev = msgString2.replace(/1/g,'a').replace(/2/g,'e').replace(/3/g,'i').replace(/4/g,'o').replace(/5/g,'u');
    return msgRev;
}
//console.log(decode('h3 th2r2!'));

// Desafio 10
function techList(techName, nameFirst) {
  let tecnologias = [];
  let techVazio = "Vazio!";
  for (i = 0; i < techName.length; i += 1){
      //colocando criando os objetos e colocando no array
      tecnologias.push({tech: techName[i], name: nameFirst});
      // ordenando em ordem alfabetica
      tecnologias.sort(function (a, b) {
        if (a.tech < b.tech) {
          return -1;
        } 
        else {
          return true;
        }
      });
    }
  if (tecnologias.length > 0) {
    return tecnologias; 
  }
  else {
    return techVazio;
  } 
}
console.log(techList(['Javascript','CSS','HTML','React','Ject'],'Lucas'));

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
