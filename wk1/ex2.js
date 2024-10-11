function checkDivisible (n, d) {
    if (n % d) {
        return false
    } else {
        return true
    }
}

console.log(checkDivisible(8, 2))
console.log(checkDivisible(9, 2))