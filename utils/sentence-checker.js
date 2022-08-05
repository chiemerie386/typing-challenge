const sentenceChecker = (text, answer) => {
    let textArray= text.split(' ')
    let answerArray = answer.split(' ')
    let count = 0
    for(let i=0; i<textArray.length; i++){
        if(textArray[i] === answerArray[i]){
            count++
        }
    }
    let percentage = (count/textArray.length) * 100
    return {
        score: count,
        total: textArray.length,
        percentage:(percentage | 0)
    }
}

export default sentenceChecker