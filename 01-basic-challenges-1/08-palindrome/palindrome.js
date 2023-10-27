function isPalindrome(string) {
    let checkedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    let words = ""
    let reversed =""
    for(let i=0; i<checkedString.length; i++){
        words += checkedString[i]
    }
    for(let i=checkedString.length-1; i>=0; i--){
        reversed += checkedString[i]}
    if (words === reversed) {
      return true;
    } else {
      return false;
    }
    
}

// function isPalindrome(str){
//     const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g,'')
//     const reversedStr = formattedStr.split('').reverse().join('')
//     return formattedStr === reversedStr
// }

module.exports = isPalindrome;
