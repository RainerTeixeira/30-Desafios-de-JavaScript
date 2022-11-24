function invertepalavra(word) {
    return word.toLowerCase().split('').reverse().join('')
  }
  
  function invertepalavras(str) {
    return str.split(' ').map(invertepalavra).join(' ')
  }


console.log(invertepalavra('lorem impsum dolorec sec avanti'))     // itnava ces cerolod muspmi merol 
console.log(invertepalavra('this is an apple'))                   //elppa na si siht
console.log(invertepalavra('may the force be with your'))        // ruoy htiw eb ecrof eht yam
console.log(invertepalavra('it s over nine thousand'))          // dnasuoht enin revo s ti 
