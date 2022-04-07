let quest= `#1 Palindrome
The problem can be stated along the following lines: given a string, return true if the string is a palindrome and false if it isn’t.
 Include spaces and punctuation in deciding if the string is a palindrome`

 let truExamp = 'racecar'
 let falseExamp = 'treet'


 function palindromeChecker (palindrome){
     let arr = palindrome.split("")
     revArray= arr.slice().reverse()

console.log(arr.filter((letter,i)=>  letter === revArray[i]).join('') ===arr.join(''))

 }

palindromeChecker(truExamp)
palindromeChecker(falseExamp)