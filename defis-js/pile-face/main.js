const myBtn = document.getElementById("myBtn");
const result = document.getElementById("result");

myBtn.addEventListener('click', headsOrTails);

function headsOrTails(){
     /* let random = Math.random();*/
   let random = Math.floor(Math.random()*2);
   console.log(random);
   if (random>0.5) {
       result.innerHTML = 'Heads';
   } else {
       result.innerHTML = 'Tails';
   }
};

/* dans le IF on peut aussi écrire ==1 au lieu de >0.5 ça fait le meme résultat
on peut aussi n'uitliser que math random sans math floor comme indiqué
sinon floor c'est le bas, plancher 
ceil c'est le plafond donc haut
round c'est arrondi comme en math donc on sait pas quel résultat on va avoir*/ 

// -> Vous devez développer un petit script qui affiche aléatoirement soit le mot Pile, soit le mot Face (en anglais, Heads ou Tails"