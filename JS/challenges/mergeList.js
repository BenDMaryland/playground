let arr1 = [1, 2, 4]
let arr2 =[1, 3, 4]

function merger(array1, array2){
    let arr = array1.concat(array2).sort((a, b) => (a - b))
console.log(arr)

}       



merger(arr1,arr2)