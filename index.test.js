const {recursFib, declareFib} = require('./index')

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
    `('fib', ({input, solution}) => {
        expect(declareFib(input)).toBe(solution)
    })
})