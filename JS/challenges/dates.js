const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function fridayTheThirteenth(year){
for(let i =1; i !=13; i++){
new Date(`${i} 13, ${year}`).getDay()===5 ? console.log(`The month ${monthNames[i-1]}, has a friday the thirteenth in  ${year}`) : null
}}

fridayTheThirteenth(2022)

