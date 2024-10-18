const smapleDict = ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'lazy', 'dog']
const sampleText = `
    best
    read
    on
    windy
    nights
`

const checkAcrostic = (text, dict) => {
    const candidate = text.split('\n').filter(el => el).map(el => el.trim()).map(el => el[0]).join('')
    return dict.indexOf(candidate) !== -1
}

console.log(checkAcrostic(sampleText, smapleDict))