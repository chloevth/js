const password = document.getElementById("password") ;
const checkPassword = document.getElementById("check-password") ;
const alert = document.getElementById("alert") ;

checkPassword.addEventListener('keyup', function() {
    
    console.log(password.value);
    console.log(checkPassword.value);

     if (checkPassword.value === password.value) {
        alert.innerHTML = 'The password entered is ok';
         alert.style.color = 'green';
        
     } else{
        alert.innerHTML = 'The password entered don\'t match';
        alert.style.color = 'red';
        
     }
})


/* 
si on met pas .value dans le console.log ça renvoie seulement la balise html mais pas sa valeur, avec .value, ça renvoie le mdp tapé par l'utilisateur
il faut appliquer la ppté .value à une balise html
ça met tout le temps le message erreur rouge sans value car ça compare des balises html seule qui sont donc différentes
faut comparer les valeurs de ces balises avec value

*/ 