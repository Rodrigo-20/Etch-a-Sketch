const containter=document.querySelector('.container');
let x=Math.floor((Math.random()*0xfff)).toString(16).padStart(4,'#');
let k=prompt("How many grids per column and row ?");//determine the size of the grid
/*while(typeof k!='number'){
let k=prompt("How many grids per column and row ?")
}*/
containter.style.gridTemplateRows=`repeat(${k},${100/k}%)`;//cange the amounto of rows
containter.style.gridTemplateColumns=`repeat(${k},${100/k}%)`;//change the amount of columns
for(let i=0;i<k;i++){
    for(let j=0;j<k;j++){
    let div=  document.createElement('div');
    div.classList.add('box');
    div.style.backgroundColor=x;
    containter.appendChild(div);    
    }
}   

function changeColor(){//change the color of each div
    let x=Math.floor((Math.random()*0xfff)).toString(16).padStart(4,'#');
    this.style.backgroundColor=x;
    console.log(`este numero :`+x);
}

const boxes=document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.addEventListener('mouseover',changeColor);
    });
