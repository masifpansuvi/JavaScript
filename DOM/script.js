// let heading = document.getElementById("heading");
// console.dir(heading);
// console.log(heading)


// let heading = document.getElementsByClassName('heading-class');
// console.dir(heading);
// console.log(heading);

// selector query
// let firstEl = document.querySelector('p');
// console.dir(firstEl);
// console.log(firstEl);

// TagNames;
// console.log(firstEl.tagName);

//InnerText

// let fruittDiv = document.querySelector('div');
// console.dir(fruittDiv);
// console.dir(fruittDiv.innerText);

/* practice q no: 01*/ /*
let heading2 = document.querySelector('h2')
console.log(heading2);
console.dir(heading2);
console.dir(heading2.innerText);
heading2.innerText = heading2.innerText + ' from apna college students';
console.dir(heading2.innerText);
*/

/* practice q no: 02 *//*
// let divs = document.querySelectorAll('.box');
// console.dir(divs);
// divs[0].innerText = 'new unique value 1';
// divs[1].innerText = 'new unique value 2';
// divs[2].innerText = 'new unique value 3';

let idx=1;
for(let div of divs){
    console.dir(div.innerText = `new unique value ${idx}`);
    idx++;
}

*/ /* get Attribute of tags *//*
let div = document.querySelector('div');
console.dir(div)
console.log(div)
let name = div.getAttribute('class')
console.log(name);
*/

/* set Attribute *//*
let div = document.querySelector('div')
console.dir(div);
console.log(div);
let  name  = div.setAttribute('class','box1');
console.log(name)
 *//*

let div = document.querySelector('.div')
console.log(div)
div.style.fontSize = '24px';
div.style.backgroundColor = 'bluevoilet';
div.style.height = '250px'
div.style.width = '250px'

*//* insert an element end of the node*//*

let box = document.querySelector('.div');
console.log(box);
let btn = document.createElement('button')
btn.innerText = 'submit';
box.append(btn);
btn.style.marginTop = '20px'

*//* isert an element before any node *//*
let p = document.querySelector('#para')//access the position where the new element is place
console.log(p);
let button = document.createElement('button')// create a new element
button.innerText = 'submit';
console.log(button);
p.prepend(button);
*/ 
/* insert just before the node*//*
let p = document.querySelector('#para')//access the position where the new element is place
console.log(p);
let button = document.createElement('button')// create a new element
button.innerText = 'submit';
console.log(button);
p.before(button);
*/
/* insert element just after the node *//*
let p = document.querySelector('#para')//access the position where the new element is place
console.log(p);
let button = document.createElement('button')// create a new element
button.innerText = 'submit';
console.log(button);
p.after(button);
*/
/* insert element before any node*//*
let p = document.createElement('button');
p.innerText = 'submit'
console.log(p);
document.querySelector('div').before(p);
*/
/* insert element just after any node *//*
let p = document.createElement('button');
p.innerText = 'submit'
console.log(p);
document.querySelector('div').before(p);
*/

/* to remove element *//*
let para = document.querySelector('.para1');
para.remove();
*/
/*
let newBtn = document.createElement('button');
newBtn.innerText = 'click me!'
console.log(newBtn);
document.querySelector('body').prepend(newBtn);
newBtn.style.backgroundColor = 'Red';
newBtn.style.color = 'white';
*/
/* add class list in js*/
// let divs = document.querySelector('.div')
// console.log(divs)
// console.log(divs.classList);
// console.log(divs.classList.add('box'));
/*
let para =document.querySelector('p')
console.log(para)
// let newClass = p.setAttribute('class','newClass')
// console.log(p)
console.log(para.classList)
console.log(para.classList.add('newClass'));

let h1 = document.querySelector('h1');
console.log(h1)
console.log(h1.classList);
console.log(h1.classList.add('newHeading'));

/*
let btn = document.querySelector('.btn')
console.log(btn)
btn.style.backgroundColor = 'black';
btn.style.color = 'white';
btn.innerText = 'click here'
btn.getAttribute('class','button')
*/



















