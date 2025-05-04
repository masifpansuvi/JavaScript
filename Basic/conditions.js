//if, else if and else conditon used in js
let mode = 'lighter'
let color;

if (mode === 'dark'){

    color = 'black';
}
else if (mode === 'lighter'){
    color = 'lightblue';
}
else{
    color === 'white'
}
console.log(color);

let result = (mode = 'lighter' ? color = 'lightblue' : color = 'white')
console.log(result)