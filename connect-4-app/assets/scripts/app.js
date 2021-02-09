
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


    $( '.col' ).hover(
        function() {
            $( this ).children( '.cell:last-child' ).addClass( 'red' );
        }, function() {
            $( this ).children( '.cell:last-child' ).removeClass( 'red' );
        }
    );


} );