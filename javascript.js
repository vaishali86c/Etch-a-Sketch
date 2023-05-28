//create grid 16*16 of square divs on web page

function createGrid1(size) {
    
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

//createGrid(16);

function createGrid2(size) {
    
    const container = document.querySelector('.container');
   
    for (let i = 0;i < size;i++) {
        for (let j = 0;j < size;j++) {
            const gridsqr2 = document.createElement('div');
            gridsqr2.classList.add('grid-square32');
            container.appendChild(gridsqr2);


        }
    }
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}
//createGrid2(32);

function createGrid3(size) {
    
    const container = document.querySelector('.container');
   
    for (let i = 0;i < size;i++) {
        for (let j = 0;j < size;j++) {
            const gridsqr3 = document.createElement('div');
            gridsqr3.classList.add('grid-square64');
            container.appendChild(gridsqr3);


        }
    }
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

//createGrid3(64);

function createGrid4(size) {
    
    const container = document.querySelector('.container');
   
    for (let i = 0;i < size;i++) {
        for (let j = 0;j < size;j++) {
            const gridsqr4 = document.createElement('div');
            gridsqr4.classList.add('grid-square128');
            container.appendChild(gridsqr4);


        }
    }
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}
createGrid4(128);















//using javscript create divs

//use flexbox