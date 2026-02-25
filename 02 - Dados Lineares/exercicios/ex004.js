const MAX_SIZE = 100;
let stack = [];

const isFull = () => stack.length >= MAX_SIZE;
const isEmpty = () => stack.length === 0;
const push = (v) => !isFull() && stack.push(v);
const pop = () => isEmpty() ? null : stack.pop();

function hasBalancedParentheses(expr) {
    stack = [];
    for (let char of expr) {
        if (char === '(') push(char);
        if (char === ')' && pop() === null) return false;
    }
    return isEmpty();
}

const expr1 = "((1+2) * (3/4))";
const expr2 = "((1+2)";
const expr3 = "(1+2))"


console.log(`${expr1}: ${hasBalancedParentheses(expr1) ? "Balanceada" : "Não Balanceada"}`);
console.log(`${expr2}: ${hasBalancedParentheses(expr2) ? "Balanceada" : "Não Balanceada"}`);
console.log(`${expr3}: ${hasBalancedParentheses(expr3) ? "Balanceada" : "Não Balanceada"}`);
