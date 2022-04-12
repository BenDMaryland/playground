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

function sudokuChecker(soduku) {
  let f = 0;

  for (let i = 0; i != 9; i++) {
    for (let e = 0; e != 9; e++) {
      soduku[i][e] != "." ? (row = [...row, soduku[i][e]]) : null;
      soduku[e][i] != "." ? (column = [...column, soduku[e][i]]) : null;

      if (e === 8) {
        console.log("Column is ", hasDuplicates(column));
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
        if (e < 3 ) {
          soduku[i][e] != "." ? (setFour = [...setFour, soduku[i][e]]) : null;
        } else if (e < 6) {
          soduku[i][e] != "." ? (setFive = [...setFive, soduku[i][e]]) : null;
        } else {
          soduku[i][e] != "." ? (setSix = [...setSix, soduku[i][e]]) : null;
        }
      } else if (i > 6) {
        if (e < 3) {
          soduku[i][e] != "." ? (setSeven = [...setSeven, soduku[i][e]]) : null;
        } else if (e < 6 && e > 2) {
          soduku[i][e] != "." ? (setEight = [...setEight, soduku[i][e]]) : null;
        } else {
          soduku[i][e] != "." ? (setNine = [...setNine, soduku[i][e]]) : null;
        }
      }
    }

    console.log("row is ", hasDuplicates(row));

    console.log("set one is ", hasDuplicates(setOne));
    console.log("set two is ", hasDuplicates(setTwo));
    console.log("set thee is ", hasDuplicates(setThree));

    console.log("set four ",setOne)
    console.log("set four is ", hasDuplicates(setFour));
    console.log("set five is ", hasDuplicates(setFive));
    console.log("set six is ", hasDuplicates(setSix));

    //console.log("set six ", setEight);

    console.log("set seven is ", hasDuplicates(setSeven));
    console.log("set eight is ", hasDuplicates(setEight));
    console.log("set nine is ", hasDuplicates(setNine));

    row = [];

  }

  function hasDuplicates(array) {
    return new Set(array).size !== array.length;
  }
}

sudokuChecker(bad);
