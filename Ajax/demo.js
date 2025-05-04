let heading = document.querySelector('#heading')
let btn = document.getElementById('btn')
function loadData(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(this.readystate == 4 && this.status == 200){
            heading.innerHTML = this.responseText;
        }
    }
    xhttp.open('GET','Ajax\jsTopic.txt',true);
    xhttp.send();

}
