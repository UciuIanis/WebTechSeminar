const smapleDict = ['incredible', 'wonderful']
const sampleText = 'I think javascript is incredible and wonderful'

const censorString = (text, dict) => {
    const censored = text.split(' ').filter(el => el).map(el => {
        if (dict.indexOf(el) !== -1) {
            return el[0] + '*'.repeat(el.length - 2) + el[el.length - 1]
        }
        return el
    }).join(' ')
    return censored
}

console.log(censorString(sampleText, smapleDict))