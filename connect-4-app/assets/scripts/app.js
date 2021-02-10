
////////////////////
// DEFINE PLAYERS //
////////////////////


class Player {
    constructor ( name, checker ) {
        this.name = name;
        this.checkerColor = checker;
        // this.moves = [];
    }
}


const player1 = new Player( 'Player 1', 'red' );
// console.log( player1 );
const player2 = new Player( 'Player 2', 'yellow' );
// console.log( player2 );



////////////////////
// WIN CONDITIONS //
////////////////////


const verticalWinConditions = [];
// const checkForVerticalWin = () => {}

const horizontalWinConditions = [];
// const checkForHorizontalWin = () => {}

const diagonalWinConditions = [];
// const checkForDiagonalWin = () => {}



////////////////
// AFTER LOAD //
////////////////

$( () => {

    // tracks how many plays have been made and determines whose turn it is
    // ODD = player that goes first & EVEN = player that goes second
    let turn = 0; 


    // listens for the player to click a column 
    $( '.col' ).on( 'click' , ( event ) => {
        let cellTracker = 1; // tracks the cells that are filled in the column 
        let cellFilled = false; // allows a break in the loop when a cell is filled


        // places the players checker on event
        // while all of the cells are not filled, find the first cell that can be filled
        while ( cellTracker <= 6 && cellFilled === false ) {
            if ( $( event.currentTarget ).children( `.cell:nth-child(${cellTracker})` ).hasClass( 'filled' ) ) {
                cellTracker ++; // cell is filled, check next cell
            } else {
                turn ++; // turn complete, add one

                // fill color based on player's turn
                if ( turn % 2 !== 0 ) {
                    $( event.currentTarget ).children( `.cell:nth-child(${cellTracker})` ).addClass( `${player1.checkerColor} filled` );
                } else if ( turn % 2 === 0 ) {
                    $( event.currentTarget ).children( `.cell:nth-child(${cellTracker})` ).addClass( `${player2.checkerColor} filled` );
                }

                cellFilled = true; // cell is now filled, exit loop
            }
        }

        // function(s) to check if either player has won


    } );


} );