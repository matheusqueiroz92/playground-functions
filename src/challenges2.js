// Desafio 11
function generatePhoneNumber(phoneNumber) {
  let msgReturn = "Array com tamanho incorreto.";
  let msgError = "não é possível gerar um número de telefone com esses valores";
  if (phoneNumber.length === 11) {
    for (let i = 0; i < phoneNumber.length; i += 1) {
      if (phoneNumber[i] < 0 || phoneNumber[i] > 9){
      return msgError;
      }
    }
    for (let i2 = 0; i2 < phoneNumber.length; i2 += 1) {
      count = phoneNumber.filter(x => x === phoneNumber[i2]).length;
      if (count >= 3) {
        return msgError;
      }
    }
    return "(" + phoneNumber[0] + phoneNumber[1] + ") " + phoneNumber[2] + phoneNumber[3] + phoneNumber[4] + phoneNumber[5] + phoneNumber[6] + "-" + phoneNumber[7] + phoneNumber[8] + phoneNumber[9] + phoneNumber[10];
  }
  else {
    return msgReturn;
  }
}
//console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (Math.abs(lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB)) {
    return false;
  }
  else if (Math.abs(lineA < lineB - lineC || lineA < lineC - lineB || lineB < lineA - lineC || lineB < lineC - lineA || lineC < lineA - lineB || lineC < lineB - lineA)){
    return false;
  }
  else {
    return true
  }
}
//console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate(qtdDrink) {
  let soma = 0; //variável que receberá a quantidade de bebidas
  let qtdT = 0; // variável para receber a string que converterá em número
  let qtd = qtdDrink.replace(/[^0-9]/g, ""); //extraindo apenas os números da string
  let arr = qtd.split(''); //colocando os números extraídos em um array
  for (let i = 0; i < arr.length; i += 1) {
    qtdT = parseInt(arr[i], 10); //transformando string em número
    soma = soma + qtdT;
  }
  if (soma == 1) {
    return soma + " copo de água";
  }
  else {
    return soma + " copos de água";
  }
}
console.log(hydrate("2 cervejas, 3 copos de vinho, 4 copo de cachaça"));



module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
