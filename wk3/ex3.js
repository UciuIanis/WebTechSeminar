function generatorFunction() {
    let cache = [1, 1]
    let f = function (n) {
        if (n > cache.length - 1) {
            cache[n] = f(n - 1) + f(n - 2)
        } else {
            console.log(`found position ${n} in cache`);
        }
        return cache[n]
    }
    return f
}

const fib = generatorFunction()
console.log(fib(8));
console.log(fib(5));