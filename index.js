// Cache the controls and drawing container once; the rest of the script reuses them.
const container = document.querySelector('.container')
const changeSizeButton = document.querySelector('.change-size');
const resetButton = document.querySelector('.reset');
let currentSize = 16;

// Rebuild the grid from scratch so size changes and resets always start clean.
function createGrid(size) {
    container.innerHTML = '';

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div')
        square.classList.add('square');
        square.style.width = `${700 / size}px`;
        square.style.height = `${700 / size}px`;
        // Persist darkening progress on the element because each square tracks it independently.
        square.dataset.opacity = 0;
        
        // Each hover assigns a fresh random color and increases opacity until the square is fully opaque.
        square.addEventListener('mouseenter', () => {
            let opacity = Number(square.dataset.opacity);

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

// Prompt for a new grid size, validate it, then rebuild the board with that dimension.
changeSizeButton.addEventListener('click', () => {
    const size = Number(prompt('Enter a grid size from 1 to 100'));

    if (!Number.isInteger(size) || size < 1 || size > 100 || size === 0) {
        return alert('Please input a real number');
    }

    currentSize = size;
    createGrid(currentSize);
})

resetButton.addEventListener('click', () => {
    createGrid(currentSize);
})
