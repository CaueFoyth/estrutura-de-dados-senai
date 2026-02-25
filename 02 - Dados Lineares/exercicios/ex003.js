let head = null;
let tail = null;

function insertAtBeginning(value) {
    const newNode = { value, next: tail, prev: null };
    if (!head) {
        head = newNode;
        tail = newNode;
    } else {
        newNode.next = head;
        head.prev = newNode;
        head = newNode;
    }
}

function removeFromEnd() {
    if (!tail) {
        console.log("A lista está vazia.");
        return null;
    }

    const removedValue = tail.value;

    if (head === tail) {
        head = null;
        tail = null;
    } else {
        tail = tail.prev;
        tail.next = null;
    }

    return removedValue;
}

function printForwardAndBackward() {
    if (!head) {
        console.log("A lista está vazia.");
        return;
    }

    console.log("Imprimindo do início ao fim:");
    let current = head;
    let forwardStr = "";
    while (current) {
        forwardStr += current.value + (current.next ? " <-> " : "");
        current = current.next;
    }
    console.log(forwardStr);

    console.log("Imprimindo do fim ao início:");
    current = tail;
    let backwardStr = "";
    while (current) {
        backwardStr += current.value + (current.prev ? " <-> " : "");
        current = current.prev;
    }
    console.log(backwardStr);
}

console.log("Inserindo 30, 20 e 10 no início...");
insertAtBeginning(30);
insertAtBeginning(20);
insertAtBeginning(10);

console.log("\nEstado atual da lista:");
printForwardAndBackward();

console.log("\nRemovendo do final:", removeFromEnd());

console.log("\nEstado da lista após remoção:");
printForwardAndBackward();
