function compararContagem(count, index, array) {
    return index !== 0 ? count === array[index - 1] : true
}

function verificarLetra(str) {
    const contagemCaracter = {}

    for (let i = 0; i < str.length; i++) {
        const letraAtual = str[i]
        contagemCaracter[letraAtual] = contagemCaracter[letraAtual] ? contagemCaracter[letraAtual] + 1 : 1
    }
    return Object.values(contagemCaracter).every(compararContagem)
}

console.log(verificarLetra('this is thee')) // verdadeiro
console.log(verificarLetra('ssd')) // falso
console.log(verificarLetra('lorem ipsum')) // falso
console.log(verificarLetra('QQwweerrttyy')) // verdadeiro
console.log(verificarLetra('Rainer Teixeira')) // falso
