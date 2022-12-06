function parMenor(par) {
    const result = []

    for (let i = 0; i <= par[0]; i++) {
        for (let j = 0; j <= par[1]; j++) {
            result.push([i, j])
        }

    }
    return result
}

console.log(parMenor([2, 2]))
console.log(parMenor([2, 7]))
console.log(parMenor([-3, -3]))
console.log(parMenor([7, 6]))