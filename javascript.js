// create grid 16*16 of square divs on web page
const buttonSize1 = document.querySelector('#btn1');
const buttonSize2 = document.querySelector('#btn2');
const buttonSize3 = document.querySelector('#btn3');
const buttonSize4 = document.querySelector('#btn4');
const clear = document.querySelector('#clear')
// const container = document.querySelector('.container');
// const currentGrid = createGrid1(16);
    
// const gridcell =document.querySelectorAll(".container #grid-sqare-16");




// buttonSize1.onclick = () => createGrid1();

buttonSize1.onclick = () => createGrid1(16);
buttonSize2.onclick = () => createGrid2();
buttonSize3.onclick = () => createGrid3();
buttonSize4.onclick = () => createGrid4();
clear.onclick = () => clearGrid();
// const gridcell =document.querySelectorAll(".ontainer #grid-sqare-16");

// function clearGrid() {
//     container.innerHTML = '';
//     currentGrid = null;
//   }
// if (size == 16) {
//     createGrid1(16);
// } else if (size == 32) {
//     createGrid2(32);
// } else if (size == 64) {
//     createGrid3(64);
// }else (size == 128) {
//     createGrid4(128);
// // }
// function clearGrid() {
//     container.innerHTML = '';
//     // currentGrid = null;
// }



function createGrid1(size) {
    // clearGrid();
    const container = document.querySelector('.container');
  
    for (let i = 0;i < size;i++) {
        for (let j = 0;j < size;j++) {
            const gridsqr1= document.createElement('div');
            gridsqr1.classList.add('grid-square16');
            container.appendChild(gridsqr1);


        }
    }
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
 
    
    /* grid-template-columns: repeat(16,1fr);    */
    /*repeat(16, 1fr) indicates that the pattern should repeat 16 times.
    1fr specifies that each column should occupy an equal fraction of the available space */
}

// createGrid1();

function createGrid2() {
    
    const container = document.querySelector('.container');
   
    for (let i = 0;i < 32;i++) {
        for (let j = 0;j < 32;j++) {
            const gridsqr2 = document.createElement('div');
            gridsqr2.classList.add('grid-square32');
            container.appendChild(gridsqr2);


        }
    }
    container.style.gridTemplateColumns = `repeat(32, 1fr)`;
}
//createGrid2(32);

function createGrid3() {
    
    const container = document.querySelector('.container');
   
    for (let i = 0;i < 64;i++) {
        for (let j = 0;j < 64;j++) {
            const gridsqr3 = document.createElement('div');
            gridsqr3.classList.add('grid-square64');
            container.appendChild(gridsqr3);


        }
    }
    container.style.gridTemplateColumns = `repeat(64, 1fr)`;
}

//createGrid3(64);

function createGrid4() {
    
    const container = document.querySelector('.container');
   
    for (let i = 0;i < 128;i++) {
        for (let j = 0;j < 128;j++) {
            const gridsqr4 = document.createElement('div');
            gridsqr4.classList.add('grid-square128');
            container.appendChild(gridsqr4);


        }
    }
    container.style.gridTemplateColumns = `repeat(128, 1fr)`;
}
//createGrid4(128);










//using javscript create divs

//use flexbox