// initialzie selector
const container = document.querySelector('.container')
const changeSizeButton = document.querySelector('.change-size');
const resetButton = document.querySelector('.reset');
let currentSize = 16;

// creates the grid
function createGrid(size) {
    container.innerHTML = '';

    // loop for creating the grids 
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div')
        square.classList.add('square');
        square.style.width = `${700 / size}px`;
        square.style.height = `${700 / size}px`;
        square.dataset.opacity = 0;
        
        // generate random color that eventually gets darker each time a mouse enter
        square.addEventListener('mouseenter', () => {
            let opacity = Number(square.dataset.opacity);

            // generate random color
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);

            if (opacity < 1) {
                opacity += 0.1;
                square.dataset.opacity = opacity;
            }

            square.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
        })

        container.appendChild(square)
    }
}
createGrid(currentSize);

// change the size
changeSizeButton.addEventListener('click', () => {
    const size = Number(prompt('Enter a grid size from 1 to 100'));

    if (!Number.isInteger(size) || size < 1 || size > 100) {
        return;
    }

    currentSize = size;
    createGrid(currentSize);
})

resetButton.addEventListener('click', () => {
    createGrid(currentSize);
})
