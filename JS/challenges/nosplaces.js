let string = "The quick brown fox jumped over the lazy dog."

function noSpaces(string){
 let result= string.split("").map(letter=>(letter!=" "? letter: null)).join("")
console.log(result)
}

noSpaces(string)