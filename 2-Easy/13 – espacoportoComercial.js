function moedas(num) {
    const moedas = {
        '500': 0,
        '100': 0,
        '25': 0,
        '10': 0,
        '5': 0,
        '1': 0,
    }
    let resto = num 

    moedas['500'] = Math.floor(resto / 500)
    resto -= 500 * Math.floor(resto / 500)
  
    moedas['100'] = Math.floor(resto / 100)
    resto -= 100 * Math.floor(resto / 100)
  
    moedas['25'] = Math.floor(resto / 25)
    resto -= 25 * Math.floor(resto / 25)
  
    moedas['10'] = Math.floor(resto / 10)
    resto -= 10 * Math.floor(resto / 10)
  
    moedas['5'] = Math.floor(resto / 5)
    resto -= 5 * Math.floor(resto / 5)
  
    moedas['1'] = Math.floor(resto / 1)
    resto -= 1 * Math.floor(resto / 1)
  
    return moedas
  }

console.log(moedas(478))
console.log(moedas(384))
console.log(moedas(5412))
console.log(moedas(50))