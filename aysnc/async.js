// asynchronous function
/*
function func(){
    console.log('hello')
    setTimeout(()=>{
        console.log('hello2');
    },4000)
    console.log('hello3')
}
func();

console.log('hello1');
console.log('hello2');
setTimeout(()=>{
    console.log('Take a time of 3s')
},3000)
console.log('hello3')*/

// Aysnc And Await

// async function getData(){
//     console.log('hello')
// }
/*

function Api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('hello2');
            resolve('succes');
        },3000);
    });
};

async function getData(){
    await Api();
}

*/

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('data Id',dataId);
            resolve('succes');
        },3000);
    });
};

// async function ayscfunc(){
//     console.log('fetching data 1...');
//     await getData(1);
//     console.log('fetching data 2...');
//     await getData(2);
// }

// (async function (){
//     console.log('fetching data 1...');  
//     await getData(1);
//     console.log('fetching data 2...');
//     await getData(2);
// })()

// (async ()=>{
//     console.log('fetching data 1...');  
//     await getData(1);
//     console.log('fetching data 2...');
//     await getData(2);
// })();

// (()=>{
//     console.log('fetching data 1...');  
//     await getData(1);
//     console.log('fetching data 2...');
//     await getData(2);
// })();














