document.getElementsByTagName('nav')[0].firstElementChild.style.color = 'red'
// console.log(document.getElementsByTagName('nav')[0].firstElementChild[0].style.color = 'black')
// document.getElementsByTagName('nav')[0].firstElementChild[2].style.color = 'black'

console.log(document.getElementsByTagName('nav')[0])
console.log(document.getElementsByTagName('nav')[0].firstElementChild.firstElementChild.style.color = "black")
console.log(document.getElementsByTagName('nav')[0].firstElementChild.lastElementChild.style.color = "black")

Array.from(document.getElementsByTagName('li')).forEach(element => {
    element.style.backgroundColor = 'cyan';
});


