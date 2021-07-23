const {recursFib, declareFib, memoFib} = require('./index')

describe('fibs', () => {
    it.each`
    input   |   solution
    ${1}    |   ${0}  
    ${2}    |   ${1}  
    ${3}    |   ${1}  
    ${4}    |   ${2}  
    ${5}    |   ${3}  
    ${6}    |   ${5}  
    ${7}    |   ${8}  
    ${8}    |   ${13}  
    ${14}   |   ${233}
    `('recursFib', ({input, solution}) => {
        expect(recursFib(input)).toBe(solution)
    })
    it.each`
    input   |   solution
    ${1}    |   ${0}  
    ${2}    |   ${1}  
    ${3}    |   ${1}  
    ${4}    |   ${2}  
    ${5}    |   ${3}  
    ${6}    |   ${5}  
    ${7}    |   ${8}  
    ${8}    |   ${13}  
    ${14}   |   ${233}
    `('fib', ({input, solution}) => {
        expect(declareFib(input)).toBe(solution)
    })
    // because this executes sometimes in sub ms time, this test is not determistic but it was a decent shot without using a profiler
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