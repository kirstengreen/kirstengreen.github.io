
////////////////////
// DEFINE PLAYERS //
////////////////////


class Player {
    constructor ( name, checker ) {
        this.name = name;
        this.checkerColor = checker;
        this.moves = [];
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

    let turn = 0;

    $( '.col' ).on( 'click' , ( event ) => {

        turn++

        if ( turn % 2 === 0 ) {
            $( event.currentTarget ).children( '.cell:nth-child(1)' ).addClass( player2.checkerColor );
        } else {
            $( event.currentTarget ).children( '.cell:nth-child(1)' ).addClass( player1.checkerColor );
        }

    });


} );