const containter=document.querySelector('.container');
let x=Math.floor((Math.random()*0xfff)).toString(16).padStart(4,'#');

/*while(typeof k!='number'){
let k=prompt("How many grids per column and row ?")
}*/
/*function createGrid(){
    let k=prompt("How many grids per column and row ?");
    containter.style.gridTemplateRows=`repeat(${k},1fr)`;//cange the amounto of rows
containter.style.gridTemplateColumns=`repeat(${k},1fr)`;//change the amount of columns
for(let i=0;i<k;i++){
    for(let j=0;j<k;j++){
    let div=  document.createElement('div');
    div.classList.add('box');
    div.style.backgroundColor=x;
    containter.appendChild(div);    
    }
} 
}*/
function removeAllChildNodes(parent){//removes all the divs so it can create a new div of a diferent size
     
    while(parent.firstChild){
          
         parent.removeChild(parent.firstChild);
    } 
 }

function createGrid(k){//creates a grid of kxk size
    if(typeof k=='number'){
        
        removeAllChildNodes(containter);
        containter.style.gridTemplateRows=`repeat(${k},1fr)`;//cange the amounto of rows
        containter.style.gridTemplateColumns=`repeat(${k},1fr)`;//change the amount of columns
        for(let i=0;i<k;i++){
            for(let j=0;j<k;j++){
                let div=  document.createElement('div');
                div.classList.add('box');
                div.style.backgroundColor=x;
                containter.appendChild(div);    
            }
        }
         
    }
    const boxes=document.querySelectorAll('.box');//make all squares color changeable
    boxes.forEach((box) => {
        box.addEventListener('mouseover',changeColor);
    });
}        
function changeColor(){//change the color of each grid element
    let x=Math.floor((Math.random()*0xfff)).toString(16).padStart(4,'#');
    this.style.backgroundColor=x;
     
}

function newGrid(){//creates a new grid 
    let rowsAndColumns=parseInt(prompt("Chose the size of the gride(row and columns)"));//determine the size of the grid
     
    createGrid(rowsAndColumns);
    }
/*function restartPage(){
    window.location.reload();
}*/
createGrid(8);


const restartButton=document.querySelector('#restart-button');
restartButton.addEventListener('click',newGrid);
/*window.addEventListener('onbeforeprint',createGrid);*/