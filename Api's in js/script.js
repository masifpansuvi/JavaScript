const URl = 'https://cat-fact.herokuapp.com/facts/';
const factPara = document.querySelector('#fact');
const btn = document.querySelector('#btn');

const getFacts = async () =>{
    console.log('fetcing data....')
        let response = await fetch(URl);
        console.log(response);
        let data = await response.json() 
        console.log(data)
        factPara.innerText = data[0].text;
}
btn.addEventListener('click',getFacts)
