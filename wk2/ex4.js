function map(arr, t) {
    const results = []
    for (const el of arr) {
        results.push(t(el))
    }
    return results
}

const sampleArray = [1, 2, 3]
console.log(map(sampleArray, el => el ** 3))