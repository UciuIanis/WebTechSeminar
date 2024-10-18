const sampleArray = [{
    brand: 'a',
    prcessor: 'i5',
    ram: 16
}, {
    brand: 'a',
    prcessor: 'm2',
    ram: 8
}, {
    brand: 'd',
    prcessor: 'm2',
    ram: 16
}, {
    brand: 'd',
    prcessor: 'i5',
    ram: 16
}]

const filterObjects = (arr, searchExpr) => {
    return arr.filter(el => {
        let result = true
        Object.keys(searchExpr).forEach(key => {
            if (!el[key] || el[key] !== searchExpr[key]) {
                result = false
            }
        })
        return result
    })
}

console.log(filterObjects(sampleArray, { brand: 'd', ram: 16 }))