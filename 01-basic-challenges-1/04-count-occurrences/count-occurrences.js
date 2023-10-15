function countOccurrences(string,character) {
    let count = 0
    for(let i=0; i<string.length;i++){ if (string[i] == character) {
      count++;
    }}
   

    return count

}

// function countOccurrences = (str,char) => str.split(char).length - 1;


module.exports = countOccurrences;


