// const startBtn = document.querySelector('#start')
// const stopBtn = document.querySelector('#stop')

// const randomColor = function (){
//     const letters = '0123456789ABCDEF'
//     let color = '#'
//     for(let i=0; i<6; i++){
//         color += letters[Math.floor(Math.random()*16)]
//     }
//     return color
// }
// let intervalId;
// const startChangingColor = function(){
//     if(!intervalId){
//         intervalId = setInterval(changeColor, 1000)
//     }
//     function changeColor(){
//         document.body.style.backgroundColor = randomColor();
//     }
// }
// const stopChangingColor = function(){
//     clearInterval(intervalId)
//     intervalId = null
// }

// startBtn.addEventListener('click',startChangingColor)
// stopBtn.addEventListener('click',stopChangingColor)

const insert = document.getElementById('insert')

window.addEventListener('keydown',(e)=>{
    insert.innerHTML = `
        <div class="color">
            <table>
                <tr>
                    <th>key</th>
                    <th>keyCode</th>
                    <th>code</th>
                </tr>
                <tr>
                    <td>${e.key == " "? "space": e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
            </table>
        </div>
    `
})
