let numbers = null

function insertAtBeginnig(value) {
    const newNode = { value, next: numbers }
    numbers = newNode
}

function insertAtEnd(value) {
    const newNode = { value, next: null }

    if (numbers === null) {
        numbers = newNode
        return
    } else {
        let temp = numbers
        while (temp.next !== null) {
            temp = temp.next
        }
        temp.next = newNode
    }
}

function removeByPosition(position) {
    if (numbers === null) return;

    if (position === 1) {
        numbers = numbers.next
        return
    }

    let temp = numbers
    for (let i = 1; i < position - 1; i++) {
        if (temp.next === null) break;
        temp = temp.next
    }
    if (temp.next !== null) {
        temp.next = temp.next.next
    }
}

function displayList() {
    let output = []
    let temp = numbers
    while (temp !== null) {
        output.push(temp.value)
        temp = temp.next
    }
    return output.join(", ") || "Vazia"
}

console.log(`Lista: ${displayList()}`)
insertAtBeginnig(1)
console.log(`Lista: ${displayList()}`)

insertAtBeginnig(2)
console.log(`Lista: ${displayList()}`)

insertAtEnd(9)
console.log(`Lista: ${displayList()}`)

insertAtEnd(5)
console.log(`Lista: ${displayList()}`)

removeByPosition(1)
console.log(`Lista: ${displayList()}`)

removeByPosition(1)
console.log(`Lista: ${displayList()}`)