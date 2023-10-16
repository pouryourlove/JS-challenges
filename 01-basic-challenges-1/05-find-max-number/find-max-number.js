function findMaxNumber(number) {
    let max = number[0]
    for(let i=1; i<number.length; i++){
        if(max < number[i]){
            max=number[i]
        }
    }
    return max
}

module.exports = findMaxNumber;
