
// method 1
// let complete = true;
// const promise = new Promise((resolve, reject)=>{
//     if (complete) {
//         resolve('completed')
//     }else{
//         reject('error')
//     }
// })

// const onSuccess = (message) => {
//     console.log(message)
// }
// const onRejection = (err) => {
//     console.log(err)
// }
// promise.then(onSuccess)
// promise.catch(onRejection)

// method 2

console.log('method 2')
// method 2
// const prom = (complete) => {
//     return new Promise((resolve, reject) => { 
//         console.log('fetchig data.....')
//         setTimeout(() => {
//             if (complete) {
//                 resolve('succesfull')
//             }else{
//                 reject('error')
//             }
//         }, 2000);
//      })
// }
// // const onSuccess = (message) => {
// //     console.log(message)
// // }
// // const onRejection = (error) => {
// //     console.log(error)
// // }

// prom(true).then((message)=>{
//     console.log(message)
// }).catch(error => {
//     console.log(error)
// })

const prom = (complete) => {
    return new Promise((resolve, reject) => { 
        console.log('fetchig data.....')
        setTimeout(() => {
            $.get('https://jsonplaceholder.typicode.com/posts',function(data){
                resolve(data)
            }).fail(err => {
                reject('fail to load json')
            })
        }, 2000);
        })
}

prom().then(result => {
    console.log(result)
}).catch(error => {
    console.log(error)
})