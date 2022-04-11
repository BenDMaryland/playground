let examHeight = [1,2]
let exam2 = [1,8,6,2,5,4,8,3,7]



function maxArea(height){
    let e = 0
    let finalResult =0 
 for (let i = 1; i <= height.length; i++){
     if (i === height.length){ e++
    i = e+1 
    if (height[i] === undefined){
        
        return finalResult
    }
}


let result = height[i] < height[e]?
  height[i] *  (i-e) :
    height[e] * (i -e)

finalResult  > result? null : finalResult=result
 console.log(`The result is ${result}, from a e of ${e} and an I of ${i}`)

 }
 console.log(finalResult)
}

maxArea(examHeight)
maxArea(exam2)