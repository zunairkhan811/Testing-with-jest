const length = require('./script.js');

test('lenght of string',()=>{
    expect(length('ali')).toBe(3)
})
test('lenght of string',()=>{
    expect(length('akram')).toBe(5)
})
test('lenght of string',()=>{
    expect(length('ali aslam')).toBe(8)
})
test('lenght of string',()=>{
    expect(length('ali aslam ak rama')).toBe('error')
})
test('lenght of string',()=>{
    expect(length('')).toBe('error')
})