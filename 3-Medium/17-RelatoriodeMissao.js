function inserirNaString(str, paraInserir, indexes) {  const charsArray = str.split('')
  let inserirContador = 0

  for (let i = 0; i <= str.length; i++) {
    if (indexes.includes(i)) {
      charsArray.splice(i + inserirContador, 0, paraInserir)
      inserirContador++
    }
  }

  return charsArray.join('')
}

console.log(inserirNaString('Capaz utilizar as capsulas emergencia', 'de', [0, 6, 27, 38]))
console.log(inserirNaString('Nos decidimos apesar das chances serem baixas que enviaremos um sinal para [...]', 'de', [6, 27, 38]))
console.log(inserirNaString('Hello', 'World', [6]))
console.log(inserirNaString('Issso é um teste', 'Não', []))