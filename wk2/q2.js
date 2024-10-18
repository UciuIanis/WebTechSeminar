//function arr and num return arr of values divisible by num
let sampleArray = [1, 2, 4, 7, 2, 3]
let calculateArray = (arr, num) => {
    return arr.filter(el => !(el % num))
}

console.log(calculateArray(sampleArray, 2))