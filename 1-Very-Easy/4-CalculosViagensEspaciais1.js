
function raizQuadrada(num) {
    const digitoArray = num.toString().split('')
    return Number(digitoArray.map(numero => numero ** 2).join(''))
  }

console.log(raizQuadrada(3514))  //925116
console.log(raizQuadrada(94571))  //81625491
console.log(raizQuadrada(24))  //416
console.log(raizQuadrada(745821698))  //4916256441368164
