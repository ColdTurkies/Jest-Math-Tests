// math.test.js
import { 
    add, 
    subtract, 
    multiply, 
    power, 
    abs, 
    mod, 
    fac, 
    round, 
    ceil, 
    floor 
} from './math.js';

describe('Math Library', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('subtracts 5 - 2 to equal 3', () => {
        expect(subtract(2, 5)).toBe(3);
    });

    test('multiplies 2 * 3 to equal 6', () => {
        expect(multiply(2, 3)).toBe(6);
    });

    test('calculates power 2^3 to equal 8', () => {
        expect(power(2, 3)).toBe(8);
    });

    test('calculates absolute value | -2 | to equal 2', () => {
        expect(abs(-2)).toBe(2);
    });

    test('calculates 3 mod 2 to equal 1', () => {
        expect(mod(3, 2)).toBe(1);
    });

    test('calculates factorial 7! to equal 5040', () => {
        expect(fac(7)).toBe(5040);
    });

    test('rounds 7.2 to equal 7', () => {
        expect(round(7.2)).toBe(7);
    });

    test('ceils 7.2 to equal 8', () => {
        expect(ceil(7.2)).toBe(8);
    });

    test('floors 9.98 to equal 9', () => {
        expect(floor(9.98)).toBe(9);
    });
});
