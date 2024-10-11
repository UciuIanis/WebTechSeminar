function addArrays(a, b) {
    if (a.length !== b.length) {
        return null
    } else {
        let c = []
        for (let i = 0; i < a.length; i++) {
            c.push(a[i])
            c.push(b[i])
        }
        return c
    }
}

console.log(addArrays([1, 2, 3], [4, 5, 6, 7]))
console.log(addArrays([1, 2, 3], [4, 5, 6]))