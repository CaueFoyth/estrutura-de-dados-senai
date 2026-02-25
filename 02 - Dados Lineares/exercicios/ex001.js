let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function getElementByPosition(position) {
    return numbers[position]
}

function removeElementByPosition(position) {
    numbers.splice(5, 1)
}

console.log(`Números: ${numbers}`)

console.log(`Procurando o número na posição 5: ${getElementByPosition(5)}`)

console.log(`Removendo o número na posição 5!`)
removeElementByPosition(5)

console.log(`Números após a deleção: ${numbers}`)