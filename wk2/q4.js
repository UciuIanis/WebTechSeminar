function reduce(arr, t, acc=0){
    for(const el of arr){
        acc = t(acc, el)
    }
    return acc
}

const sampleArray = [1, 2, 3]
console.log(reduce(sampleArray, (acc, el) => acc + el, 0))