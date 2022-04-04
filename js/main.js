/*----- constants -----*/
/*----- app's state (variables) -----*/

let board;

let turn = 'X'

/*----- cached element references -----*/

const boxArray = Array.from(document.querySelectorAll('#board div'));

/*----- event listeners -----*/

document.getElementById('board').addEventListener('click', handleTurn);

/*----- functions -----*/

function initialize() {
    board = ['', '', '', '', '', '', '', '', ''];
    function render() {
        board.forEach(function(mark, index) {
            // console.log(mark, index);
            boxArray[index].textContent = mark;
        });
    };
    render();
};

initialize();

function handleTurn(event) {
    let idx = boxArray.findIndex(function(box) {
        return box === event.target;
    });
        board[idx] = turn;
        console.log(board);   
};