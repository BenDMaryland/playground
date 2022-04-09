let string = "The quick brown fox jumped over the lazy dog."

let key = ['a','e','i','o','u','y']

function vowelGrabber(string){

let result = string.split("").map(letter=>(key.find(vowel=>letter===vowel ? letter :null ) )).join("")

console.log(result)
}

vowelGrabber(string)