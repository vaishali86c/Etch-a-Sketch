// create grid 16*16 of square divs on web page
const buttonSize1 = document.querySelector('#btn1');
const buttonSize2 = document.querySelector('#btn2');
const buttonSize3 = document.querySelector('#btn3');
const buttonSize4 = document.querySelector('#btn4');
const clear = document.querySelector('#clear')
const container = document.querySelector('.container');
const gridsqr = container.querySelector('.gridsqr')
let currentGridSize = 0;


buttonSize1.onclick = () => createGrid1(16);
buttonSize2.onclick = () => createGrid1(32);
buttonSize3.onclick = () => createGrid1(64);
buttonSize4.onclick = () => createGrid1(128);
clear.onclick = () => clearGrid();

function clearGrid() {
    container.innerHTML = '';  //It clears the HTML content of the container element using container.innerHTML = '', effectively removing all grid squares.
    container.style.gridTemplateColumns = '';//  used to cleargrid function to reset the gridtemplatecol style propert of the container element to an empty string
}

function createGrid1(size) {

    clearGrid();
    currentGridSize = size;

    const container = document.querySelector('.container');
  
    for (let i = 0;i < size;i++) {
        for (let j = 0;j < size;j++) { 

            const gridsqr= document.createElement('div');
            if (size == 16) {
                gridsqr.classList.add('grid-square16');
                container.appendChild(gridsqr);

            //hover effect when mouse is onthe grid or pass out
                gridsqr.addEventListener("mouseenter", function() {
                gridsqr.style.backgroundColor = "black";
                });
                        
                gridsqr.addEventListener("mouseout", function() {
                gridsqr.style.backgroundColor = "black"; 
                });
            }
            if (size == 32) {
                gridsqr.classList.add('grid-square32');
                container.appendChild(gridsqr);

                
                gridsqr.addEventListener("mouseenter", function() {
                gridsqr.style.backgroundColor = "black";
                });
                            
                gridsqr.addEventListener("mouseout", function() {
                gridsqr.style.backgroundColor = "black"; 
                });
            }
            if (size == 64) {
                gridsqr.classList.add('grid-square64');
                container.appendChild(gridsqr);

                
                gridsqr.addEventListener("mouseenter", function() {
                gridsqr.style.backgroundColor = "black";
                });
                            
                gridsqr.addEventListener("mouseout", function() {
                gridsqr.style.backgroundColor = "black"; 
                });
            }
            if (size == 128) {
                gridsqr.classList.add('grid-square128');
                container.appendChild(gridsqr);

                
                gridsqr.addEventListener("mouseenter", function() {
                gridsqr.style.backgroundColor = "black";
                });
                            
                gridsqr.addEventListener("mouseout", function() {
                gridsqr.style.backgroundColor = "black"; 
                });
            }
        }
        
    }
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;                                                        
    /* grid-template-columns: repeat(16,1fr);    */
    /*repeat(16, 1fr) indicates that the pattern should repeat 16 times.
    1fr specifies that each column should occupy an equal fraction of the available space */
}  

