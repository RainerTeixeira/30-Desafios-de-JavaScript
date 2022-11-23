function raizQuadrada(num) {
    const str = num.toString()
    let resultado = ""

     for (let i = 0; i < str.length; i++) {
       resultado += Math.pow(Number(str)[i],2) // resultado = resultado + ...alguma coisa 
    }
    
}




console.log(raizQuadrada(3514))  //925116
console.log(raizQuadrada(94571))  //81625491
console.log(raizQuadrada(24))  //416
console.log(raizQuadrada(745821698))  //4916256441368164
