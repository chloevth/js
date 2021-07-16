const input = document.getElementById("input") ;
const display = document.getElementById("display") ;
const checkbox = document.getElementById("checkbox");

console.log('coucou');
document.getElementById('checkbox').addEventListener('click', function() {
    
    if (input.type == 'password'){
        input.type = 'text';
        display.innerHTML ='Hide';
    }
    else{
        input.type = 'password';
        display.innerHTML ='Show';
    }
    
    
});
    
    

/*
Objectif : 
Lorsque l'utilisateur entre un mot de passe, il est masqué par défaut. L'idée est de lui proposer une option pour afficher/masquer son mot de passe. 

Consigne : 
En HTML, les input ont un « type ». Écrivez une condition qui vérifie la valeur de « input.type » et la change en fonction du résultat !

Bonus : 
Le texte Show/Hide dans la span qui a l'id « display » se remplace lorsqu'on clique sur la checkbox, si le mot de passe est caché, il indique « show », sinon, il indique « hide » ;
Reproduisez le comportement courant suivant lequel il faut maintenir le clic pour voir le mot de passe, et il disparaît dès qu'on relâche. 




*/