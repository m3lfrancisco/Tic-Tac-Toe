/*----- constants -----*/
/*----- app's state (variables) -----*/

let board;

/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/

function initialize() {
    board = ['', '', '', '', '', '', '', '', ''];
    function render() {
        board.forEach(function(mark, index) {
            console.log(mark, index);
        });
    };
    render();
};

initialize();