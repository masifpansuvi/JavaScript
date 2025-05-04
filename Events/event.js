const box = document.querySelector('.box')

// box.addEventListener('mousemove', (evt)=>{
//     console.log(evt);
//     console.log(evt.clientX);
// })

const box2 = document.querySelector('.box2')

box.addEventListener('click',(e)=>{
    console.log('outer box clicked')
})
box2.addEventListener('click',(e)=>{
    console.log('inner boc clicked')
    e.stopPropagation();
})