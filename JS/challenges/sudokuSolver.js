let good = [["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

let bad = [["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]


let row = []
let column=[]

function sudokuChecker(soduku){
let f=0

for (let i = 0; i!= 9; i++){


for (let e = 0; e!= 9; e++){
soduku[i][e] != "." ? row = [...row, soduku[i][e]] : null 
soduku[e][i] != "." ? column = [...column, soduku[e][i]] : null 

if(e===8){
 console.log( "Column is ",hasDuplicates(column))
 column=[]}
 

}

console.log("row is ", hasDuplicates(row))
row = []
}

function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}


}


sudokuChecker(good)