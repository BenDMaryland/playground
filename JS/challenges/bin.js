// async function getCapitalCity(country) {
//    let  resp = await fetch(`https://jsonmock.hackerrank.com/api/countries?name=Afghanistan`)
//     console.log(resp)
// }
// getCapitalCity("aaaa")
let res


let https = require("https")
https.get(`https://jsonmock.hackerrank.com/api/countries?name=Afghanistan`,  res => {
    let data = ''
    res.on('data', chunk => {
        data += chunk
    });

    res.on('end',  () => {
        let res =  JSON.parse(data)
        res.data[0].capital === undefined ? res = 0 : res = res.data[0].capital
        

        
    })



}).on('error', err => {
    console.log(err.message)
})

console.log(res)
