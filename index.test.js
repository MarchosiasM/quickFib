const {recursFib, declareFib, memoFib} = require('./index')

describe('fibs', () => {
    it.each`
    input   |   solution
    ${0}    |   ${0}  
    ${1}    |   ${1}  
    ${2}    |   ${2}  
    ${3}    |   ${3}  
    ${4}    |   ${5}  
    ${5}    |   ${8}  
    ${6}    |   ${13}  
    ${7}    |   ${21}  
    ${8}    |   ${34}  
    ${14}   |   ${610}
    `('recursFib', ({input, solution}) => {
        expect(recursFib(input)).toBe(solution)
    })
    it.each`
    input   |   solution
    ${0}    |   ${0}  
    ${1}    |   ${1}  
    ${2}    |   ${2}  
    ${3}    |   ${3}  
    ${4}    |   ${5}  
    ${5}    |   ${8}  
    ${6}    |   ${13}  
    ${7}    |   ${21}  
    ${8}    |   ${34}  
    ${14}   |   ${610}
    `('fib', ({input, solution}) => {
        expect(declareFib(input)).toBe(solution)
    })
    it('memoFib should run faster on subsequent runs', () => {
        const firstRunStart = Date.now();
        console.time("Function #1")
        memoFib(1000)
        console.timeEnd("Function #1")
        const firstRunComplete = Date.now() - firstRunStart;
        const secondRunStart = Date.now();
        memoFib(1000);
        const secondRunComplete = Date.now() - secondRunStart;
        expect(secondRunComplete).toBeLessThan(firstRunComplete)
    })
})