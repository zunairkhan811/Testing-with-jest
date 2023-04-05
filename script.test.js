const length = require('./modules/stringlength.js');
const reverse = require('./modules/reverseString.js');
const calculate = require('./modules/calculator.js');
const capitalize = require('./modules/capitalizeString.js');

describe('tests for string length',()=>{
    test('lenght of string',()=>{
        expect(length('ali')).toBe(3)
    })
    
    test('lenght of string',()=>{
        expect(length('ali aslam ak rama')).toBe('error')
    })
    test('lenght of string',()=>{
        expect(length('')).toBe('error')
    })
})

describe('tests for reversing the string',()=>{
    test('reverse the string',()=>{
        expect(reverse('hello')).toBe('olleh')
    })
    test('reverse the string',()=>{
        expect(reverse('hello aslam')).toBe('malsa olleh')
    })
})
describe('tests for calculate numbers',()=>{
    test('add the number',()=>{
        expect(calculate.add(2,3)).toBe(5)
    })
    test('subtract the number',()=>{
        expect(calculate.subtract(2,3)).toBe(-1)
    })
    test('divide the number',()=>{
        expect(calculate.divide(6,2)).toBe(3)
    })
    test('multiply the number',()=>{
        expect(calculate.multiply(6,2)).toBe(12)
    })
})
describe('tests for capitalize first letter of string',()=>{
    test('add the number',()=>{
        expect(capitalize('aslam')).toBe('Aslam')
    })
    test('add the number',()=>{
        expect(capitalize('john wick')).toBe('John wick')
    })
    
})

