//---> Promise One
// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("promises created");
//         resolve()
//     },2000)
// })
// promiseOne.then(function(){
//     console.log('done')
// })

//---> Promise two
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('promeise created')
//         resolve()
//     },2000)
// }).then(function(){
//     console.log('done');
    
// })

//---->Promise Three
// const PromiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({userName: 'Asif', email: "abcgmail.com"})
//     },2000)
// });
// PromiseThree.then(function(user){
//     console.log(user);
//     console.log(user.userName);
// })

///---> Promise Four
const PromiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({userName: 'Asif', email: 'abs@gmail.com'})
        }else{
            reject("Error something went wrong")
        }
    },2000)
})
PromiseFour.then(function(user){
    console.log(user);
    return user.userName;  
})
.then(function(userName){
    console.log(userName)
})
.catch(function(error){
    console.log(error);
    
})
