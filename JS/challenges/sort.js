// let array = [2, 1, 6, 5, 89, 22, 213, 2, 3, 4]
// //console.log(array.sort((a, b) => a - b).slice(-1))
// console.log(Math.max(...array))

function Multipl(num1, num2) {
    let total = 0
    let neg = false

    if (num1 < 0 && num2 < 0) {
        num1 = Math.abs(num1)
        num2 = Math.abs(num2)
    }
    else if (num1 < 0 || num2 < 0) {
        num1 = Math.abs(num1)
        num2 = Math.abs(num2)
         neg = true
    }


    for (let i = 0; i != num1; i++) {
        total = total + num2
    }

neg ? total = -total: total = total
    console.log(total)
}

Multipl(1, 4)