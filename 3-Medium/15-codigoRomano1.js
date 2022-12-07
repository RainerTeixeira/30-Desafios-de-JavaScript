function romanNumeral(str) {  const numeralsArray = str.split('')

  const decimalsArray = numeralsArray.map(numeral => {
    switch (numeral) {
      case 'I':
        return 1
      case 'V':
        return 5
      case 'X':
        return 10
      case 'L':
        return 50
      case 'C':
        return 100
      case 'D':
        return 500
      case 'M':
        return 1000
      default:
        return 0
    }
  })

  return decimalsArray.reduceRight((accum, atual, index, array) => {
    if (atual < array[index + 1]) {
      return accum - atual
    } else {
      return accum + atual
    }
  }, 0)
}

console.log(romanNumeral('XLVII'))     //47
console.log(romanNumeral('CDXXXVIII')) //438
console.log(romanNumeral('CMIX'))      //909
console.log(romanNumeral('MMMCMXCIX')) //3999
