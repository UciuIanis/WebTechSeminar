function checkLength(a, b) {
    if (a.length !== b.length) {
        return -1
    } else {
        let nr = 0
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                nr++
            }
        }
        return nr
    }
}

console.log(checkLength('sam', 'slec'))