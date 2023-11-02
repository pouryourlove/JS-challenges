function countVowels(string) {
    let checkedString = string.toLowerCase();
    let vowlsnumbers = 0;
    for(i=0; i<checkedString.length; i++){
        if (checkedString[i] === "a" || checkedString[i] === "e" || checkedString[i] === "i" || checkedString[i] === "o" || checkedString[i] === "u") {
            vowlsnumbers++;
        }
    }

    return vowlsnumbers



   
}

// function countVowels(str){
//     const formattedStr = str.toLowerCase()
//     let count = 0;

//     for(let i=0; i<formattedStr.length; i++){
//         const char = formattedStr[i];

//         if(
//             char === "a" || 
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u" 
//         ){
//             count ++
//         }
      
//     }
//     return count
// }

module.exports = countVowels;
