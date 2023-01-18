const board = document.querySelector('.board');
const cells = document.querySelectorAll('.cell');

initGrid = () => {
    for(let i = 0; i < 256; i++) {
        const cell = document.createElement('div');
        cell.classList.toggle('cell');
        cell.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'white'
        })
        board.appendChild(cell);
}
};

function newGridSize(val) {
    clearBoard();
    createDivs(val);
    board.style.gridTemplateColumns = `repeat(${val}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${val}, 1fr)`;
}

function createDivs(size) {
    for(let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.toggle('cell');
        cell.style.width = '700px / size'
        cell.style.height = '700px / size'
        cell.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'white'
        })
        board.appendChild(cell);
    }
}

function clearBoard() {
    while(board.firstChild) {
        board.removeChild(board.firstChild)
    }
}

const slider = document.querySelector('#slider')
const textValue = document.querySelector('.value')

slider.addEventListener('input', function() {
    let val = document.getElementById('slider').value;
    textValue.textContent = val;
    newGridSize(val)
})

initGrid();