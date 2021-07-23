
// classic recursive fib, runs the risk of blowing the relatively small stack in JS
const recursFib = (n) => {
    if (n < 4) return n;

    return recursFib(n - 1) + recursFib(n - 2)
} 

const declareFib = (n) => {
    if (n < 4) return n;

    const fibonacciBucket = [3, 2] // 3rd and 2nd fib numbers for later sum
    for (let i = 3; i < n; i++) {
        // the fibonacci number is the sum of the last two fibonacci numbers
        fibonacciBucket.unshift(fibonacciBucket[0] + fibonacciBucket[1]); // add it to the front of the bucket
    }

    // when we've hit our desired number, return the last sum
    return fibonacciBucket[0];
}

// we can greatly improve the performance of either fib by adding a memo
const fibMemo = {
    0: 0,
    1: 1,
    2: 2,
    3: 3
}
const memoFib = (n) => {
    if (n < 4) return n;
    if (fibMemo[n]) return fibMemo[n]
    const fibonacciBucket = [3, 2] // 3rd and 2nd fib numbers for later sum
    for (let i = 3; i < n; i++) {
        // the fibonacci number is the sum of the last two fibonacci numbers
        fibonacciBucket.unshift(fibonacciBucket[0] + fibonacciBucket[1]); // add it to the front of the bucket
        if (!fibMemo[i]) fibMemo[i] = fibonacciBucket[0]; // fills out the fibMemo as we go, improving the runtime over time
    }

    // when we've hit our desired number, return the last sum
    return fibonacciBucket[0];
}

module.exports = {recursFib, declareFib, memoFib};