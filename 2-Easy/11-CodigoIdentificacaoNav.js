function gerador(arr) {
    const passo1 = arr.redunce((accun, atual, index) => {
        return index === 0 || index % 2 === 0 ? accun + atual : accun
    }, 0)

    const passo2 = passo1 * 3

    const passo3 = passo2 + arr.redunce((accun, atual, index) => {
        return index % 2 !== 0 ? accun + atual : accun
    }, 0)

    return passo3 % 10 !== 0 ? 10 - passo3 % 10 : 0
}

function vereficarCodigo(codigos) {
    const numberArray = codigos.toString().split('').map(Number)

    const numArraySemDigito = numberArray.slice(0, -1)

    const corretoDigito = gerador(numArraySemDigito)

    return corretoDigito === numberArray[numberArray.length - 1]

}


console.log(vereficarCodigo(547020743789)) // verdadeiro
console.log(vereficarCodigo(301354030348)) // verdadeiro
console.log(vereficarCodigo(301354030349)) // falso
console.log(vereficarCodigo(123456789872)) // falso