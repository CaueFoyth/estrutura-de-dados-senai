const queue = [];
const enqueue = (v) => queue.push(v);
const dequeue = () => queue.shift() || null;

console.log("--- Simulação de Banco ---");
enqueue("Cliente A");
enqueue("Cliente B");
enqueue("Cliente C");
console.log(`Atendendo: ${dequeue()}`); // A
console.log(`Atendendo: ${dequeue()}`); // B
enqueue("Cliente D");
console.log(`Atendendo: ${dequeue()}`); // C
console.log(`Atendendo: ${dequeue()}`); // D
console.log(`Atendendo: ${dequeue()}`); // null


// === Fila Circular ===
const size = 3;
const circularQueue = new Array(size).fill(null);
let head = 0, tail = 0, count = 0;

const cEnqueue = (v) => {
    if (count === size) return console.log("Fila Cheia!");
    circularQueue[tail] = v;
    tail = (tail + 1) % size;
    count++;
};

const cDequeue = () => {
    if (count === 0) return console.log("Fila Vazia!");
    const v = circularQueue[head];
    circularQueue[head] = null;
    head = (head + 1) % size;
    count--;
    return v;
};

console.log("\n--- Fila Circular ---");
cEnqueue(1);
cEnqueue(2);
cEnqueue(3);
cEnqueue(4); // Fila cheia
console.log(`Removido: ${cDequeue()}`); // 1
cEnqueue(4); // Agora entra no espaço vago (índice 0)
console.log(`Removido: ${cDequeue()}`); // 2
console.log(`Fila atual:`, circularQueue); // [4, null, 3]
