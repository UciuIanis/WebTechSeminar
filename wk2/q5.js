const smapleDict = ['incredible', 'wonderful']
const sampleText = 'I think javascript is incredible and wonderful'

const censorString = (text, dict) => {
    const censored = text.split(' ').filter(el=>el).map(el => {
        if(smapleDict.indexOf(el)!==-1){
            for(let i=1;i<el.length-1;i++){
                el[i]='*'
            }
        }
    }).join(' ')
    return censored
}

console.log(censorString(sampleText,smapleDict))