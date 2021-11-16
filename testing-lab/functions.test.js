const { TestWatcher } = require('@jest/core')
const {
    returnTwo,
    greeting,
    add,
    subtract,
    multiply,
    divide
} = require('./functions.js')

//the name of the function should go in the the single quotes if there is one

test('returnTwo', () => expect(2).toBe(2))

//save and run "npm run test" to check
describe('greetings tests', () => {
    test('greeting', () => {
    expect(greeting('James')).toEqual("Hello ${name}")
    })

//save and run "npm run test" to check

    test('greeting', () => {
    expect(greeting('Jill')).toEqual("Hello ${name}")
    })

})
//save and run "npm run test" to check

describe('Math functions test', () => {

    test('add', () => { 
    expect(add(1,2)).toEqual(3)
    })

//save and run "npm run test" to check
//describe('Math functions tests')
    test('add', () => {
    expect(add(5,9)).toEqual(14)
    })

    test('subtract', () => {
    expect(subtract(2,10)).toEqual(8)
    })
//save and run "npm run test" to check
//make sure whichever value you put in is correct because it's either a -8 or positive 8 if you switch up the values. In this case it's a positive 8 because NUM2-NUM1

    test('multiply', () => {
    expect(multiply(6,6)).toEqual(36)
    })
//save and run "npm run test" to check

    test('divide', () => {
    expect(divide(24,3)).toEqual(8)
    })

    test('divide', () => {
        expect(divide('24','3')).toEqual(8)
    })
//save and run "npm run test" to check
//went back in to add parseInt(num2) / parseInt(num1) so that strings can be converted to numbers and it passed. In order for the other functions to do that they need parseInt() in their returns in functions.js!!!!

})