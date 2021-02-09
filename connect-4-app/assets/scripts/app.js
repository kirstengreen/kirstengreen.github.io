

$( () => {

    $( '.col' ).hover(
        function() {
            $( this ).children( '.cell:last-child' ).addClass( 'red' );
        }, function() {
            $( this ).children( '.cell:last-child' ).removeClass( 'red' );
        }
    );


} );