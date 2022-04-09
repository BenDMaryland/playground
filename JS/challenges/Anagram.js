truExamp=['finder', 'Friend']
 falseExamp =['hello', 'bye']

 function anagramFinder( examp){
let wordOne = examp[0].toLowerCase().split('')
let wordTwo = examp[1].toLowerCase().split('')
let key=[]


function buildKey(letter,operator){
let obj = {}
key.find(digit=>(Object.keys(digit)==letter)) == undefined? (obj[letter]=0 , key = [...key,obj]): null

operator === "plus"?
 key.forEach(digit=> (Object.keys(digit)==letter?
 digit[letter]++: null ))
 :key.forEach(digit=> (Object.keys(digit)==letter?digit[letter]--:  null ))
}

wordOne.map(letter=>buildKey(letter,"plus"))
wordTwo.map(letter=>buildKey(letter,"minus"))
console.log(key.filter(digit=>( Object.values(digit) !=0 )).length==0)
 }


 anagramFinder(truExamp)
 anagramFinder(falseExamp)