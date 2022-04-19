let arr1 = [1, 2, 4]
let arr2 =[1, 3, 4]

function merger(array1, array2){
    let arr = array1.concat(array2)
console.log(arr.sort((a,b)=>(a-b)))

}       



merger(arr1,arr2)