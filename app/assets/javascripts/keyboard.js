// Note: $(() => {}); is equivalent to $(document).ready(function(){})
$(() => {
    $( ".key" ).click(function( event ) {
        console.log( $( this ).html() );
 
    });
});
