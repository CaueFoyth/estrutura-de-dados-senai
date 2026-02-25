function fatorial(number) {
    if (number === 1) {
        return 1;
    }
    return number * fatorial(number - 1);
}

console.log(`O fatorial de 5 é: ${fatorial(5)}`);
console.log('Complexidade: O(n).');
console.log('Neste caso: O(5).');