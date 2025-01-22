let last = '';
const win = document.getElementById('winner');
document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('field');
    const play = document.getElementById('play');
    table.querySelectorAll('td').forEach(cell => {
        cell.addEventListener('click', () => {
            if (cell.textContent === '') {
                cell.textContent = last ? 'O' : 'X'
                last = !last
            }
            const winner = checkWin();

            if (winner) {
                win.textContent = `Winner: ${winner}`;
                console.log(winner);
            }
        });
    });

    play.addEventListener('click', () => {
        const allTd = document.getElementsByTagName('td');
        for (let i = 0; i < allTd.length; i++) {
            allTd[i].innerHTML = '';
        }
        win.textContent = '';
        last = '';
    })
});

function checkWin() {
    const table = document.getElementById('field');
    const cells = table.querySelectorAll('td');

    const board = Array.from(cells, cell => cell.textContent);

    const winCombinations = [
        [0, 1 ,2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let combination of winCombinations) {
        const [a, b, c] = combination;

        if (
            board[a] &&
            board[a] === board[b] &&
            board[a] === board[c]
        ){
            return board[a];
        }
    }

    return null;
}