let first = document.getElementsByTagName('div')[1]
first.innerHTML = first.innerHTML + '<h3>Hello world!</h3>'

let box = document.createElement('div')
box.innerHTML = '<h1>Hey I am second element</h1>'

first.appendChild(box)



