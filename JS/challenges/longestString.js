let str = "The quick brown fox jumped over the lazy dog."
const arry = ["Saab", "Volvo", "BMddddddW"]

function longestStringFinder(array){
let ar= array.sort((a, b) => b.length - a.length)
console.log("The solution is ",ar[0])
}

longestStringFinder(arry)