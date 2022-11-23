function media(...numeros) {
    const soma = numeros.reduce((accum, num) => accum + num, 0)

    return soma / numeros.length
  }

console.log(media(10, 9, 6, 8, 9, 1, 5, 7))    //6.875
console.log(media(2, 5, 7, 1, -2))             //2.6
console.log(media(10, 10, 10, 10, 9))          //9.8
console.log(media(25, 75,))                    //50
 