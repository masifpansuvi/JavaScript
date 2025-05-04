/* Events in js *//*
let btn = document.querySelector('#btn')
console.log(btn);

btn.ondblclick = () => {
    console.log('you clicked a button')
}

let div1 = document.querySelector('#div');

div.ondblclick = () => {
    div1.style.backgroundColor = 'white';
}
div1.onmouseover =() => {
    console.log('you hve mouse over here')
}
*/

/* Events object */
/*
let btn = document.querySelector('button');
btn.onmouseover =(evt) => {
    console.log(evt);
    console.log(evt.clientX);
    console.log(evt.type)
    console.log(evt.target)

}
*/

/*Event listner   *//*
let btn = document.querySelector('button');
btn.addEventListener('mouseover',()=>{
    console.log('you done mouse over 1 time')
})
let newBtn = ()=>{
    console.log('you done mouse over 2 times')
}

btn.addEventListener('mouseover',newBtn)

btn.addEventListener('mouseover',()=>{
    console.log('you done mouse over 3 times')
})

// to remove events
btn.removeEventListener('mouseover',newBtn);
*/

/*practice question */
/*
let btn = document.querySelector('#btn');
let currMode = 'light'
btn.addEventListener('click',()=>{
    if (currMode === 'light'){
        // btn.style.backgroundColor = 'black';
        // btn.style.color = 'white';
        btn.classList.add('btn1')
        btn.classList.remove('btn')
        currMode = 'dark'
    }else{
        // btn.style.backgroundColor = 'white';
        // btn.style.color = 'black';
        btn.classList.add('btn')
        btn.classList.remove('btn1')
        currMode = 'light'
    }
    console.log(currMode)
})

*/
/* practice on div */

// let div =  document.querySelector('div')
// console.log(div)

// let mouseOver = 0;
// div.addEventListener('mouseover', ()=>{
//     if (mouseOver == 0){
//             document.querySelector('body').style.backgroundColor = 'grey';
//             //div.classList.add('div2')
//             mouseOver++;
//             console.log(mouseOver);
//         }else {
//             document.querySelector('body').style.backgroundColor = 'black';
//             //div.classList.add('.class')
//             mouseOver--;
//             console.log(mouseOver)
//          }
// })












