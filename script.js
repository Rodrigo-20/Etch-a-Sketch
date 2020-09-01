const containter=document.querySelector('.container');
let x=Math.floor((Math.random()*0xfff)).toString(16).padStart(4,'#');
/*let k=prompt("How many grids per column and row ?")
while(typeof k!='number'){
let k=prompt("How many grids per column and row ?")
}*/
for(let i=0;i<4;i++){
    for(let j=0;j<4;j++){
    let div=  document.createElement('div');
    div.classList.add('box');
    div.style.backgroundColor=x;
    containter.appendChild(div);    
    }
}   

function changeColor(){
    let x=Math.floor((Math.random()*0xfff)).toString(16).padStart(4,'#');
    this.style.backgroundColor=x;
    console.log(`este numero :`+x);
}

const boxes=document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.addEventListener('mouseover',changeColor);
    });
