// to avoid .then() amd .catch()

let p1 = new Promise((resolve, reject) => { 
    console.log('fetching data....')
    setTimeout(() => {
        resolve(10)
    }, 1000);
 })

 let p2 = new Promise((resolve, reject) => { 
    console.log('fetching data....')
    setTimeout(() => {
        resolve(20)
    }, 2000);
 })

 let p3 = new Promise((resolve, reject) => { 
    console.log('fetching data....')
    setTimeout(() => {
        resolve(30)
    }, 1000);
 })
let total = 0;

 Promise.all([p1, p2, p3]).then(res => {
    for (i in res) {total += res[i]}
    console.log(res)
 }).catch(err => {
    console.log(err)
 })
