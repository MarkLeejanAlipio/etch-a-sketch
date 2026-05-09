const container = document.querySelector('.container');
const changeSizeBtn = document.querySelector('.change-size');
const resetBtn = document.querySelector('.reset');

let size = 16;

function createGrid(size) {
    container.textContent = '';
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${700 / size}px`;
        square.style.height = `${700 / size}px`;
        let currentOpacity = 0;
        square.style.opacity = currentOpacity;
        container.append(square);

        square.addEventListener('mouseenter', event => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);

            if (currentOpacity < 1) {
                currentOpacity = Math.min(currentOpacity + 0.1, 1);
                square.style.opacity = currentOpacity;
            }

            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        })
    }
}
createGrid(size);

changeSizeBtn.addEventListener('click', () => {
    let changeSize = Number(prompt('Size less than 100'))
    if (!Number.isInteger(changeSize) || changeSize < 1 || changeSize > 100) {
        return;
    }
    size = changeSize
    createGrid(size)
})

resetBtn.addEventListener('click', () => {
    createGrid(size)
})