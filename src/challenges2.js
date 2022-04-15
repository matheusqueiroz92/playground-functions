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
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));




// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
