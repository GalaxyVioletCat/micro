$( document ).ready( function() {
  let timer;
  $( 'a[href="#prevItem"]' ).on( 'click', function() {
    clearInterval(timer);
    changeSlideMix( this, '.horizontal-slidermix', '.slide-itemmix' );
    AutoPlay()
  } );
  $( 'a[href="#nextItem"]' ).on( 'click', function() {
    clearInterval(timer);
    changeSlideMix( this, '.horizontal-slidermix', '.slide-itemmix' );
    AutoPlay()
  } );

  function changeSlideMix( obj, block, li ) {
    $( obj ).parent().find( block + ' ' + li ).stop( true, true );
    if ( $( obj ).hasClass( 'slider-prevmix' ) ) {
      const liLast = $( obj ).parent().find( block + ' ' + li + ':last' );
      liLast.prependTo( liLast.parent() ).
        css( 'margin-left', '-' + liLast.width() + 'px' ).
        animate( { marginLeft: 0 } );
    }
    else {
      const liFirst = $( obj ).parent().find( block + ' ' + li + ':eq(0)' );
      liFirst.animate( { marginLeft: 0 - liFirst.width() }, function() {
        liFirst.css( 'margin-left', 0 ).appendTo( liFirst.parent() );
      } );
    }
  }

  function AutoPlay() {
    timer = setInterval( function() {
      changeSlideMix( '.slider-nextmix', '.horizontal-slidermix',
        '.slide-itemmix' );
    }, 2000 );

  }
} );
