//sync callback 
/*
function sum(a,b){
    console.log(a + b);
}

function calSum(a,b,sumCallback){
    sumCallback(a,b)
}
calSum(1,2,(a,b)=>{
    console.log(a + b)
})
// async callback
const hello = () => {
    console.log('hello')
}
setTimeout(hello , 3000);
setInterval(hello, 3000);

*/
//callbeck hell -> due to stack of callback

function getData(dataId,getnextData){
    setTimeout(()=>{
        console.log('data id ',dataId)
        if(getnextData)
            getnextData();
    },3000)
}
console.log('fetching data 1...')
getData(1,()=>{
    console.log('fetching data 2...')
    getData(2, ()=>{
        console.log('fetching data 3...')
        getData(3)
    })
})
//promises in JS






