;( function(){

    function theme( options ){
        this.element = options.element instanceof HTMLElement
        ? options.element : document.querySelector( options.element );
        this.prefix = options.prefix ? options.prefix + "-" : "";
    }

    theme.prototype.decamelize = function( input ){

        return input.replace( /([a-z])([A-Z])/g, "$1-$2" ).toLowerCase();;
    }

    theme.prototype.declare = function( css ){

        var props = Object.keys( css );

        for( var i = 0; i < props.length; i++ ){

            this.element.style.setProperty( "--" + this.prefix + this.decamelize( props[i] ), css[props[i]] )
        };
    }

    theme.prototype.switch = function( css ){

        return this.declare.call( this, css );
    }

    window.theme = theme;
    
} )();