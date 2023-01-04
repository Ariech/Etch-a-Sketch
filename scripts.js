const board = document.querySelector('.board');


for(let i = 0; i < 16 * 16; i++) {
    const cell = document.createElement('div');
    cell.classList.toggle('cell');
    board.appendChild(cell);
}

const cells = document.querySelectorAll('.cell');

// board.addEventListener('mouseover', (e) => {
//     if (e.target.matches('.cell')) {
//         e.target.classList.add('active');
//         e.target.style.backgroundColor = "white";
//     }
// })

console.log(cells)


// cells.forEach(cell => {
//     cell.addEventListener('mouseover', (e) => {
//         if(e.target.matches('.cell')) {
//             e.target.style.backgroundColor = "white";
//         }
//     })
// })

cells.forEach(cell => {
    cell.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'white'
        })
})