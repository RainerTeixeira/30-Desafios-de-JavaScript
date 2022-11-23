function aoContrario(arr) {
    const aoContrarioarray = []

    for (let i = 0; i < arr.length; i++) [
        aoContrarioarray[i] = arr[arr.length - i - 1]
        ]
return aoContrarioarray   
}

console.log(aoContrario([0, 9, 6, 8, 9, 1, 5, 7]))
console.log(aoContrario(["oh", "oi", "mark"]))
console.log(aoContrario([false, true, true, true]))
console.log(aoContrario(["esta", "nao", 0]))    