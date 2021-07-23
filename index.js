
// classic recursive fib, runs the risk of blowing the relatively small stack in JS
const recursFib = (n) => {
    if (n === 1) return 0
    if (n === 2) return 1

    return recursFib(n - 1) + recursFib(n - 2)
} 

const declareFib = (n) => {
    if (n === 1) return 0
    if (n === 2) return 1

    const fibonacciBucket = [1, 0] 
    for (let i = 2; i < n; i++) {
        fibonacciBucket.unshift(fibonacciBucket[0] + fibonacciBucket[1]); 
    }

    return fibonacciBucket[0];
}

// we can greatly improve the performance of either fib by adding a memo
const fibMemo = {
    0: 0,
    1: 1
}
const memoFib = (n) => {
    if (fibMemo[n]) return fibMemo[n]
    const fibonacciBucket = [1, 0] 
    for (let i = 2; i < n; i++) {
        fibonacciBucket.unshift(fibMemo[i] || fibonacciBucket[0] + fibonacciBucket[1]); 
        if (!fibMemo[i]) fibMemo[i] = fibonacciBucket[0];
    }

    return fibonacciBucket[0];
}

module.exports = {recursFib, declareFib, memoFib};