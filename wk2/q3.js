const formatString = (str, format) => {
    let result = str
    for (const key in format) {
        if (result.indexOf('{' + key + '}') !== -1) {
            result = result.replace('{' + key + '}', format[key])
        }
    }

    return result
}


console.log(formatString('I am {name} and my job is {job}', {
    name: 'Andrei',
    job: 'programmer'
}))