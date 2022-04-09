truExamp=['finder', 'Friend']
 falseExamp =['hello', 'bye']

 function anagramFinder( examp){
let wordOne = examp[0].toLowerCase().split('')
let wordTwo = examp[1].toLowerCase().split('')
let key=[]
let keyOne=[]
let keyTwo=[]

function buildKey(letter,operator){
let obj = {}
key.find(digit=>(Object.keys(digit)==letter)) == undefined? (obj[letter]=0 , key = [...key,obj]): null
operator === "plus"?
key.forEach(digit=> (Object.keys(digit)==letter?digit[letter]++:  null ))
:
key.forEach(digit=> (Object.keys(digit)==letter?digit[letter]--:  null ))
}






wordOne.map(letter=>buildKey(letter,"plus"))
// keyOne= key
// key=[]
wordTwo.map(letter=>buildKey(letter,"minus"))
//keyTwo= key



console.log(key)
console.log(Object.values(key).reduce(key=> key))
// console.log("_____________")
// console.log( "Key one is ",keyOne)
// console.log("_____________")
// console.log( "Key two is ",key)
// console.log("_____________")


 }


 anagramFinder(truExamp)
