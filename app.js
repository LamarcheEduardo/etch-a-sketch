
//declare my main divs.
const wrapper = document.querySelector('.wrapper');
const row = document.getElementsByClassName('.row');
const column = document.getElementsByClassName('.column');

//create a title section and asign it a h1 tag
const title = document.createElement('div');
title.className = 'title';
title.innerHTML = "<h1>Etch-A-Sketch</h1>";
wrapper.appendChild(title);

//create a container section for the ETCH A SKETCH
const container = document.createElement('div');
container.className = "container";
wrapper.appendChild(container);

//function that makes the GRID 
const makeGrid = (rowNumb, colNumb) => {
    for(let i = 0; i < rowNumb; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        row.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = "black";
        });
        container.appendChild(row);
        console.log(row);
        for(let j = 0; j < colNumb; j++) {
            let column = document.createElement('div');
            column.className = 'column';
            row.appendChild(column);
            column.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = "black";
            });
        }
    } 
}

//default grid (16x16) function and is created on page load. 
let defaultGrid = () => {
    makeGrid(16,16);
}


//Function to create 