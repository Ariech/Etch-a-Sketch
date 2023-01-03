const board = document.querySelector('.board');

for(let i = 0; i < 16 * 16; i++) {
    const cell = document.createElement('div');
    cell.classList.toggle('cell');
    board.appendChild(cell);
}