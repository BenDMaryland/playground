
 let truExamp = 'racecar'
 let falseExamp ="civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"

function lengther(palindrome){
    let SplitPal = palindrome.split("")
    let fullresults =[]
    let e = 0 
let result = palindromeChecker(palindrome)


for(let i=1 ; i <= SplitPal.length+1; i++){
if (i === SplitPal.length+1){ e++
    i = e+1 
}
let testPal = SplitPal.slice(e,i).join("")
 result = palindromeChecker(testPal)
if (result){
     fullresults = [...fullresults,result]

}
}
// console.log(fullresults,"look ma, it works")
console.log (fullresults.sort((a, b) => b.length - a.length)[0])

}




 function palindromeChecker (palindrome){
     let arr = palindrome.split("")
     revArray= arr.slice().reverse()

return arr.filter((letter,i)=>  letter === revArray[i]).join('') ===arr.join('')? palindrome : null

 }

lengther(truExamp)
lengther(falseExamp)