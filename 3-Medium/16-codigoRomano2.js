function decifrar(str, chave) {
    const caracteresArray = str.split('')
    const AjustaChave = chave % 26

    const CodigoArray = caracteresArray.map(char => {
        const CodigoAtual = char.charCodeAt(0)

        if (CodigoAtual - AjustaChave < 65 && CodigoAtual >= 65 && CodigoAtual <= 90) {
            return CodigoAtual + 26
        }

        if (CodigoAtual - AjustaChave < 97 && CodigoAtual >= 97 && CodigoAtual <= 122) {
            return CodigoAtual + 26
        }

        return CodigoAtual
    })

    return CodigoArray.map(code => String.fromCharCode(code - AjustaChave)).join('')
}

console.log(decifrar('Vguvg', 2))
console.log(decifrar('BCDYZABcdyza', 27))
console.log(decifrar('Qaiik', 60))
console.log(decifrar('Amomlw', 8))

