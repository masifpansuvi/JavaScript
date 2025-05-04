// let promise = new Promise((resolve,reject)=>{
//     console.log('Hello')
//     resolve('succes')
// },2000)

/*

function getData(dataId, getNextData){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            console.log('data is ',dataId)
            reject('some error')
            if(getNextData){
                getNextData();
            }
        },5000)
    })
}
let promise = getData(123, ()=>{
    getData(124)
})
*//*

const getPromise = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('I am promise')
            reject('error')
        },3000)
    })
}

let promise = getPromise()
promise.then((res)=>{
    console.log('promise fullfilled', res)

})
promise.catch((err)=>{
    console.log('promise not fullfilled', err)
})
*//*
// Promise chaining

function asyncfunc1() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Data 1')
            resolve('succes')
        },3000)
    })
}
function asyncfunc2() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Data 2')
            resolve('succes')
        },3000)
    })
}
console.log('fetching data 1...')
asyncfunc1().then((res)=>{
    console.log('fetching data 2');
    asyncfunc2().then((res)=>{
})
});
*/

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('data',dataId);
            resolve('succes');
        },3000);
    });
};
console.log('fetching data 1...')
getData(1).then((res)=>{
    console.log('fetching data 2...')
    return getData(2);
})
.then((res)=>{
    console.log('fetching data 3...')
    return getData(3);
})
.then((res)=>{
    console.log('fetching data 4...')
    return getData(4);
})
.then((res)=>{
    console.log(res)
})















