function invertepalavra(word) {
    return word.toLowerCase().split('').reverse().join('')
  }
  
  function invertepalavras(str) {
    return str.split(' ').map(invertepalavra).join(' ')
  }


console.log(invertepalavra('lorem impsum dolorec sec avanti'))   // merol muspi 
console.log(invertepalavra('this is an apple'))                             // o 
console.log(invertepalavra('may the force be with your'))       // y
console.log(invertepalavra('it s over nine thousand'))      // v 
