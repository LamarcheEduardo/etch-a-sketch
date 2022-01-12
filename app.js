
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
//function that creates default grid.


//function that makes the GRID (somehow this is not working.)
const makeGrid = (rowNumb, colNumb) => {
    container.innerHTML = '';
     for(let i = 0; i < rowNumb; i++) {
         let row = document.createElement('div');
         row.className = 'row';
         row.setAttribute('id', 'colorChanger')
        container.appendChild(row);
        row.addEventListener('mouseover', (e) => {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            e.target.style.backgroundColor = "#" + randomColor;
        });
        for(let j = 0; j < colNumb; j++) {
            let column = document.createElement('div');
            column.className = 'column';
            column.setAttribute('id','colorChanger')
            row.appendChild(column);
            column.addEventListener('mouseover', (e) => {
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                e.target.style.backgroundColor = "#" + randomColor;
            });
        }
        
    }
}

//default grid size (16x16);
makeGrid(16,16);

//Creating a div for the controls.
let buttons = document.createElement('div');
buttons.className = 'buttons';
buttons.innerText = '';
wrapper.appendChild(buttons);

//Creting a button to change the NxN grid.
let newGrid = document.createElement('button');
newGrid.className = 'newGrid';
newGrid.innerText = 'Size';
buttons.appendChild(newGrid);

newGrid.addEventListener('click', () => {
    let rowNumb = prompt("New Row Value?");
    let colNumb = prompt("New Column Value?");
    rowNumb = parseInt(rowNumb);
    colNumb = parseInt(colNumb);
    makeGrid(rowNumb, colNumb);
});

//creating a reset button
let reset = document.createElement('button'); 
reset.innerText = 'Reset';
reset.className = 'btn-reset';
title.appendChild(reset);
reset.addEventListener('click', () => {
    makeGrid(16,16);
});

//creating a button to change colors.

let color = document.createElement('button');
color.innerText = 'Random Color';
color.className = 'color';
buttons.appendChild(color);



//event listener to change colors when clicked.
// color.addEventListener('click', () => {
//     setBg();
// });
// buttons.appendChild(color);