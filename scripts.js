const board = document.querySelector('.board');
const cells = document.querySelectorAll('.cell');
const resetButton = document.querySelector('.reset');
const rgbButton = document.querySelector('.rgb');
const blackButton = document.querySelector('.black');
const eraserButton = document.querySelector('.eraser');

let val = document.getElementById('slider').value;

initGrid = () => {
    for(let i = 0; i < 256; i++) {
        const cell = document.createElement('div');
        cell.classList.toggle('cell');
        cell.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'black'
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
        e.target.style.backgroundColor = 'black'
        })
        board.appendChild(cell);
    }
}

function clearBoard() {
    while(board.firstChild) {
        board.removeChild(board.firstChild)
    }
}

function createRandomColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
}

const slider = document.querySelector('#slider')
const textValue = document.querySelector('.value')

slider.addEventListener('input', function() {
    val = document.getElementById('slider').value;
    textValue.textContent = `${val} x ${val}`;
    newGridSize(val)
})

resetButton.addEventListener('click', () => {
    clearBoard();
    createDivs(val);
})

rgbButton.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let cells = board.children;
    for (let i = 0; i < val*val; i++) {
        cells[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = createRandomColor();
        })
    }
});

blackButton.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let cells = board.children;
    for (let i = 0; i < val*val; i++) {
        cells[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
    }
});

eraserButton.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let cells = board.children;
    for (let i = 0; i < val*val; i++) {
        cells[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'white';
        })
    }
});

initGrid();