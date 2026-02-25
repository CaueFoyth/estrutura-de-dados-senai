function fibonacci(number) {
    if (number === 0) {
        return 0;
    }
    if (number === 1) {
        return 1;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(`O número de fibonacci de 10 é: ${fibonacci(10)}`);
console.log('Complexidade: O(2^n).');
console.log('Neste caso: O(2^10).');

//============================================== Melhoria ==============================================

function iterativeFibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

console.log(`O número de fibonacci de 10 é: ${iterativeFibonacci(10)}`);
console.log('Complexidade: O(n).');
console.log('Neste caso: O(10).');
