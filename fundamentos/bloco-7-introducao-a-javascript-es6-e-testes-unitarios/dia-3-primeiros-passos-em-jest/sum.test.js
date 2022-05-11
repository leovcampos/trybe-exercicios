const sum = require('./sum.js');

describe('requisito 1', () => {
    it('return 9 when sum(4 ,5)', () => {
        expect(sum(4, 5)).toBe(9);
    })
    it('return 0 when sum(0, 0)', () => {
        expect(sum(0, 0)).toBe(0);
    })
    it('throws an error when parameter is a string', () => {
        expect(() => sum(4 , '5')).toThrow(Error);
    })
    it('throws an error when parameter is a string', () => {
        expect(() => sum(4 , '5')).toThrow('parameters must be numbers');
    })
});

