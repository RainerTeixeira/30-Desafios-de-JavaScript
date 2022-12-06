function verificarLetra(str) {
    const  contagemCaracter = {}

    for (let i = 0; i< str.length; i++) {
      contagemCaracter[str[i]] = contagemCaracter[str[i]] ? contagemCaracter[str[i]] + 1 : 1        
    }
    return contagemCaracter
}

console.log(verificarLetra('this is thee')) // verdadeiro
console.log(verificarLetra('ssd')) // falso
console.log(verificarLetra('lorem ipsum')) // falso
console.log(verificarLetra('QQwweerrttyy')) // verdadeiro

