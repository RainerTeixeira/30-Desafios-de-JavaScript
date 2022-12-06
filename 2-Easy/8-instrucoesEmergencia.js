function verificarLetra(str) {
    const contagemCaracter = {}

    for (let i = 0; i < str.length; i++) {
        contagemCaracter[str[i]] = contagemCaracter[str[i]] ? contagemCaracter[str[i]] + 1 : 1

    }
    return Object.values(contagemCaracter).every((count, index, array) => index !== 0 ? count === array[index - 1] : true)
}

console.log(verificarLetra('this is thee')) // verdadeiro
console.log(verificarLetra('ssd')) // falso
console.log(verificarLetra('lorem ipsum')) // falso
console.log(verificarLetra('QQwweerrttyy')) // verdadeiro
