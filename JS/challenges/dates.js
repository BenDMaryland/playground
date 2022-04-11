
function fridayTheThirteenth(year){
let d = new Date("July 23, 1983 ");
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let day = d.getDay()

for(let i =1; i !=13; i++){
d = new Date(`${i} 13, ${year} `);
 d.getDay() ===5 ? console.log(`The month ${monthNames[i-1]}, has a friday the thirteenth in  ${year}`) : null

}
}









fridayTheThirteenth(2022)

// const d = new Date("2 23, 1983 ");
// let day = d.getDay()
// console.log(day)