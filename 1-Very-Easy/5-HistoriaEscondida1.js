function letraMaisAlta(str) {
    const sequenciaLetraMinusculastring = str.toLowerCase().split('').sort()
    return sequenciaLetraMinusculastring[sequenciaLetraMinusculastring.length - 1]
  }



console.log(letraMaisAlta('lorem impsum dolorec sec avanti'))   // v
console.log(letraMaisAlta('Hello'))                             // o 
console.log(letraMaisAlta('may the force be with your'))       // y
console.log(letraMaisAlta('it s over nine thousand'))          // v 
console.log(letraMaisAlta('Rainer'))                          // r 