function ordenarstring(nomeCompleto) {  const nomes = nomeCompleto.split(' ')
  let initials = ''

  for (let i = 0; i < nomes.length - 1; i++) {
    initials += ` ${nomes[i][0].toUpperCase()}.`;
  }
  return `${nomes[nomes.length - 1].toUpperCase()},${initials}`
}





console.log(ordenarstring('isac Larrubia Ferreira Pontes'))
console.log(ordenarstring('Jonh Ronaldo Reuel Tolkien'))
console.log(ordenarstring('Chistoper James Paolini'))
console.log(ordenarstring('Suzane Marie Collins'))
