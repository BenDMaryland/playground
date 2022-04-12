let good = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

let bad = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

let alsobad = [
  ["7", ".", ".", ".", "4", ".", ".", ".", "."],
  [".", ".", ".", "8", "6", "5", ".", ".", "."],
  [".", "1", ".", "2", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "9", ".", ".", "."],
  [".", ".", ".", ".", "5", ".", "5", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", "2", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
];

let anotherbad = [
  [".", ".", ".", ".", ".", ".", "5", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ["9", "3", ".", ".", "2", ".", "4", ".", "."],
  [".", ".", "7", ".", ".", ".", "3", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "3", "4", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "3", ".", ".", "."],
  [".", ".", ".", ".", ".", "5", "2", ".", "."],
];



function sudokuChecker(soduku) {

let row = [];
let column = [];

let setOne = [];
let setTwo = [];
let setThree = [];

let setFour = [];
let setFive = [];
let setSix = [];

let setSeven = [];
let setEight = [];
let setNine = [];


  let finalResult = true;

  for (let i = 0; i != 9; i++) {
    
    for (let e = 0; e != 9; e++) {
   
      soduku[i][e] != "." ? (row = [...row, soduku[i][e]]) : null;
      soduku[e][i] != "." ? (column = [...column, soduku[e][i]]) : null;

      if (e === 8) {
     //  console.log("Column is ", hasDuplicates(column), column, i);
      hasDuplicates(column) ? (finalResult = false) : null; 
        column = [];
      }

      if (i < 3) {
        if (e < 3) {
          soduku[i][e] != "." ? (setOne = [...setOne, soduku[i][e]]) : null;
        } else if (e < 6) {
          soduku[i][e] != "." ? (setTwo = [...setTwo, soduku[i][e]]) : null;
        } else {
          soduku[i][e] != "." ? (setThree = [...setThree, soduku[i][e]]) : null;
        }
      }
      if (i < 6 && i > 2) {
        if (e < 3) {
          soduku[i][e] != "." ? (setFour = [...setFour, soduku[i][e]]) : null;
        } else if (e < 6) {
          soduku[i][e] != "." ? (setFive = [...setFive, soduku[i][e]]) : null;
        } else {
          soduku[i][e] != "." ? (setSix = [...setSix, soduku[i][e]]) : null;
        }
      } else if (i > 5) {
        if (e < 3) {
          soduku[i][e] != "." ? (setSeven = [...setSeven, soduku[i][e]]) : null;
        } else if (e < 6 && e > 2) {
          soduku[i][e] != "." ? (setEight = [...setEight, soduku[i][e]]) : null;
        } else {
          soduku[i][e] != "." ? (setNine = [...setNine, soduku[i][e]]) : null;
        }
      }
    }




    hasDuplicates(row) ?  finalResult = false  : null 

    hasDuplicates(setOne) ?  finalResult = false : null 
    hasDuplicates(setTwo) ?  finalResult = false : null 
    hasDuplicates(setThree) ?  finalResult = false : null 

    hasDuplicates(setFour) ?  finalResult = false : null 
    hasDuplicates(setFive) ? (finalResult = false) : null 
    hasDuplicates(setSix) ?  (finalResult = false) : null 
  

      hasDuplicates(setSeven) ?  (finalResult = false) : null 
      hasDuplicates(setEight) ?  (finalResult = false) : null 
      hasDuplicates(setNine) ? (finalResult = false) : null
          row = [];
  }

  function hasDuplicates(array) {
    return new Set(array).size !== array.length;
  }


  console.log(finalResult)
  return finalResult
}

sudokuChecker(anotherbad);
//sudokuChecker(good);