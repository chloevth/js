const input = document.getElementById("input");
const warning = document.getElementById("text");


document.getElementById("input").addEventListener("keyup", function(event) {
    if (event.getModifierState("CapsLock")) {
        document.getElementById("warning").style.display = "block";
    } else {
        document.getElementById("warning").style.display = "none";

    }
 

  });




/* 

Objectif : Lorsque l'utilisateur s'apprête à renseigner un champs de formulaire et que le Verrouillage Majuscule est actif, le script le lui indique.
  
Consigne : 
Utilisez « event.getModifierState() » pour détecter l'utilisation du Verouillage Majuscule ;
Utilisez « style.display » pour faire apparaître le message d'alerte 

Bonus : 
La même chose, mais avec le Verouillage Numérique ;
Le script identifie si c'est le Verouillage Majuscule, le Verouillage Numérique ou les deux qui sont actifs et donne le message d'alerte correspondant à l'une de ces 3 situations.
*/