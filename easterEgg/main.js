if ( window.addEventListener ) {
    var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
    window.addEventListener("keydown", function(e){
    kkeys.push( e.keyCode );
    if ( kkeys.toString().indexOf( konami ) >= 0 ) {
    alert('mode activate');
    document.getElementById('body').style.fontFamily = 'Comic Sans MS';
    }
    }, true);
    }


    /*
    code pour déclencher l'easter egg : avec le clavier :
    haut haut bas bas gauche droite gauche droite B A
    */ 