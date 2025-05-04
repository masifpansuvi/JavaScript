let holder = document.querySelector(".holder")
let span = document.querySelector('span')
let btn = document.querySelector(".btn")



    let arr = [`How do you make a robot angry? Keep pushing his buttons`,`
    When is a car not a car? When it turns into a parking lot`,`
    What's the best way to make a bandstand? Take away their chairs`,`
    How do you light up a sports stadium? With a soccer match`,`
    Did you hear about the kidnapping at school? They woke him up`,`
    I told a bad chemistry joke once. I got no reaction`]

    // let newArr = arr[Math.floor(Math.random() * arr.length)]
    // console.log(newArr)
    // span.innerText = newArr;     

btn.addEventListener('click', () =>{
    let newArr = arr[Math.floor(Math.random() * arr.length)]
    span.innerText = newArr;
})




