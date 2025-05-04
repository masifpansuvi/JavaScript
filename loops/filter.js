// filter
const myNum = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNum.filter( (num)=>{
  return num>4
} )
//console.log(newNums);

// Example book database
const books =  [
    { title: 'book one', Genre: 'Fiction', Publish: 1981 ,Edition:2004 },
    { title: 'book Two', Genre: 'Non-Fiction', Publish: 1992 ,Edition:2008 },
    { title: 'book Three', Genre: 'History', Publish: 1999 ,Edition:2007 },
    { title: 'book four', Genre: 'Non-Fiction', Publish: 1989 ,Edition:2010 },
    { title: 'book five', Genre: 'Science', Publish: 2009 ,Edition:2014 },
    { title: 'book six', Genre: 'History', Publish: 1987 ,Edition:2010 },
    { title: 'book seven', Genre: 'Fiction', Publish: 1986 ,Edition:1996 },
    { title: 'book eight', Genre: 'science', Publish: 2011 ,Edition:2016 },
    { title: 'book nine', Genre: 'Non-Fiction', Publish: 1981 ,Edition:1989 },

]
//console.log(books);

let userBooks = books.filter((bk)=>bk.Genre == 'Fiction')
userBooks = books.filter((bk)=>{
    return bk.Publish > 1989;
})
//console.log(userBooks);


// Map method
let myNums = [1,2,3,4,5,6,7,8,9,10]
let newNum = myNums.map((nums)=>{return nums*2})

newNum = myNums.map((n)=>n * 10).map((n)=>n +1).filter((n)=>{ // chaining
    return n > 40;
}) 
//console.log(newNum);

// reduce method

let number = [1,2,3,4]
// const newNumb = number.reduce(function(acc, currVal){
//     console.log(`acc val ${acc} and curr Val ${currVal}`);
//     return acc + currVal
// },0)

const newNumb = number.reduce((acc, currVal)=> acc + currVal)
//console.log(newNumb);

//reduce method example

const shoppingCart = [
    {
        itemName: 'JS course',
        price: 4999
    },
    {
        itemName: 'Python course',
        price: 1999
    },
    {
        itemName: 'Java course',
        price: 2999
    },
    {
        itemName: 'data scientist course',
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce((acc, item)=> acc + item.price , 0);
console.log(totalPrice);













