/*----- constants -----*/

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

/*----- app's state (variables) -----*/

let board;

let turn = 'X';

let winner;

/*----- cached element references -----*/

// Array.from() method will make an array from all elements returned by querySelectorAll.
// querySelectorAll is finding the id of board and selecting all the div children of that element.
const boxArray = Array.from(document.querySelectorAll('#board div'));
let gameStatus = document.querySelector('h2');

/*----- event listeners -----*/

document.getElementById('board').addEventListener('click', handleTurn);
document.getElementById('reset-button').addEventListener('click', initialize);

/*----- functions -----*/

initialize();

function initialize() {
    board = ['', '', '', '', '', '', '', '', ''];
    render();
};

// This render function iterates over the board array and places the mark into the correct div.
function render() {
    board.forEach(function(mark, index) {
        // console.log(mark, index);
        boxArray[index].textContent = mark;
    });
    if (winner === 'draw') {
        gameStatus.textContent = `It's a draw!`;
    } else if (winner) {
        gameStatus.textContent = `${winner} wins the game!`;
    } else {
        gameStatus.textContent = `It's ${turn}'s turn`;
    }
};

// The event is the click, the target is the element on which the event took place--the box we've clicked on. 
// findIndex() method finds the index of the box in our boxArray that matches the box that was clicked. 
function handleTurn(event) {
    let idx = boxArray.findIndex(function(box) {
        return box === event.target;
    });
        board[idx] = turn;
        // console.log(board); 
        // Use ternary operator to determine player turn.
        turn = turn === 'X' ? 'O' : 'X';
        //console.log(turn);
        winner = getWinner();     
        render();       
};

function getWinner() {
let winner = null;
    winningCombos.forEach((combo, index) => {
        let a = board[combo[0]];
        let b = board[combo[1]];
        let c = board[combo[2]];
        if (a && a === b && a === c) {
            winner = a;
        }
    });
    if (winner) {
        return winner 
    } else if (board.includes('')) {
        return null
    } else {
        return 'draw'
    }
};