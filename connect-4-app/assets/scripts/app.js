
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


const winConditions = [
    // vertical win conditions
    [  1,  2,  3,  4 ], [  2,  3,  4,  5 ], [  3,  4,  5,  6 ],
    [  7,  8,  9, 10 ], [  8,  9, 10, 11 ], [  9, 10, 11, 12 ],
    [ 13, 14, 15, 16 ], [ 14, 15, 16, 17 ], [ 15, 16, 17, 18 ],
    [ 19, 20, 21, 22 ], [ 20, 21, 22, 23 ], [ 21, 22, 23, 24 ],
    [ 25, 26, 27, 28 ], [ 26, 27, 28, 29 ], [ 27, 28, 29, 30 ],
    [ 31, 32, 33, 34 ], [ 32, 33, 34, 35 ], [ 33, 34, 35, 36 ],
    [ 37, 38, 39, 40 ], [ 38, 39, 40, 41 ], [ 39, 40, 41, 42 ],
    // horizontal win conditions
    [  6, 12, 18, 24 ], [ 12, 18, 24, 30 ], [ 18, 24, 30, 36 ], 
    [ 24, 30, 36, 42 ], [  5, 11, 17, 23 ], [ 11, 17, 23, 29 ], 
    [ 17, 23, 29, 35 ], [ 23, 29, 35, 41 ], [  4, 10, 16, 22 ], 
    [ 10, 16, 22, 28 ], [ 16, 22, 28, 34 ], [ 22, 28, 34, 40 ],
    [  3,  9, 15, 21 ], [  9, 15, 21, 27 ], [ 15, 21, 27, 33 ], 
    [ 21, 27, 33, 39 ], [  2,  8, 14, 20 ], [  8, 14, 20, 26 ], 
    [ 14, 20, 26, 32 ], [ 20, 26, 32, 38 ], [  1,  7, 13, 19 ], 
    [  7, 13, 19, 25 ], [ 13, 19, 25, 31 ], [ 19, 25, 31, 37 ],
    // diagonal win conditions
    [  3, 10, 17, 24 ], [  2,  9, 16, 23 ], [  9, 16, 23, 30 ],
    [  1,  8, 15, 22 ], [  8, 15, 22, 29 ], [ 15, 22, 29, 36 ],
    [  7, 14, 21, 28 ], [ 14, 21, 28, 35 ], [ 21, 28, 35, 42 ],
    [ 13, 20, 27, 34 ], [ 20, 27, 34, 41 ], [ 19, 26, 33, 40 ] 
];



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

        // checkForWin();

    } );


} );