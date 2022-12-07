
function somaValor(accum, atual, index, array) {
  return atual < array[index + 1] ? accum - atual : accum + atual
}

function numeralRomano(str) {
  const numeralsArray = str.split('')

  const numeralRomanoMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }

  const decimalsArray = numeralsArray.map(numeral => numeralRomanoMap[numeral])

  return decimalsArray.reduceRight(somaValor)
}

console.log(numeralRomano('XLVII'))     //47
console.log(numeralRomano('CDXXXVIII')) //438
console.log(numeralRomano('CMIX'))      //909
console.log(numeralRomano('MMMCMXCIX')) //3999
