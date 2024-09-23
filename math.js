// math.js

export function add(num1, num2) {
    return num1 + num2;
}

export function subtract(num1, num2) {
    return num2 - num1;
}

export function multiply(num1, num2) {
    return num2 * num1;
}

export function power(num, power) {
    return Math.pow(num, power);
}

export function abs(num) {
    return Math.abs(num);
}

export function mod(num1, num2) {
    return num1 % num2;
}

export function fac(num1) {
    if (num1 < 0) return undefined; // Factorial is not defined for negative numbers
    let result = 1;
    for (let i = 2; i <= num1; i++) {
        result *= i;
    }
    return result;
}

export function round(num1) {
    return Math.round(num1);
}

export function ceil(num1) {
    return Math.ceil(num1);
}

export function floor(num1) {
    return Math.floor(num1);
}

