var dark = { bgColor: "#152D32", color: "#ECD3D3" };
var light = { bgColor: "#F0F0F0", color: "#000000" };

var theme = new theme( { prefix: "main", element: "#box"} );

var switcher = document.querySelector( "button" );

window.addEventListener( "DOMContentLoaded", function( event ){

    theme.switch( light );
    switcher.dataset.theme = "light";

}, false );

switcher.addEventListener( "mouseup", function( event ){

    if( event.target.dataset.theme == "dark" ){

        theme.switch( light );
        event.target.dataset.theme = "light";
    }
    else{

        theme.switch( dark );
        event.target.dataset.theme = "dark";
    }
} );