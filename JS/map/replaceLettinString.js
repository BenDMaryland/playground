
function replacer(string, oldLet, newLet ){
let splitString = string.split("")
 splitString = splitString.map(letter=>(letter ===oldLet? letter= newLet : letter ))
console.log(splitString.join(""))
}

replacer("hello", "h", "y")