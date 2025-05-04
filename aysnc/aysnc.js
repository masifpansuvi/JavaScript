// yahoo baba

// async function test(){
//     return "Hello"
// }
// // console.log(test());

// test().then((Response)=>{
//     console.log(Response);
// })

async function std_data(){
    try {
        const response = await fetch('data.json');
        const data = await response.json()
        for(let x in data){
            const details = `Name: ${data[x].name} Age: ${data[x].age} City: ${data[x].city}`
            return details
    }
    } catch (error) {
        console.log(error);
        
    } 
}
console.log('1: message');
std_data().then((res)=>{
    console.log(res)
})
console.log('5: mssage');






