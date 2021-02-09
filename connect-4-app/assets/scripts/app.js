
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



////////////////
// AFTER LOAD //
////////////////

$( () => {

    const boardCell = $( 'div' ).find( '.cell' ); // creates a collection of every div.cell found
    let turn = 0;

    // tracking how many cells have been filled
    for ( let i = 0; i < boardCell.length; i++ ) {
        $( boardCell[i] ).one( 'click' , ( event ) => {
            turn ++
            if ( turn % 2 === 0) {
                $( event.currentTarget ).addClass( player2.checkerColor ).attr('value', 'filled' );
            } else {
                $( event.currentTarget ).addClass( player1.checkerColor ).attr('value', 'filled' );
            }
        } );

        // const winConditions = [];
        // function to check if either player has won
    }

} );