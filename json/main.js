//Objet JavaScript
/*let utilisateur = {
    "prenom": "Pierre",
    "nom": "Giraud",
    "adresse": {
        "rue": "30 Impasse des Lilas",
        "ville": "Toulon",
        "cp": 83000,
        "pays": "France"
    },
    "mails": [
        "pierre.giraud@edhec.com",
        "pierre@pierre-giraud.com"
    ]
  };*/



//Conversion en chaine JSON
let json = JSON.stringify(utilisateur);
let test = JSON.parse('{"prenom": "Pierre", "nom": "Giraud"}');
document.getElementById("resultat").innerHTML = "Type de la variable : " + typeof(json) + "<br>Contenu de la variable : " + json;

document.getElementById("resultat2").innerHTML = "Type de la variable : " + typeof(test) + "<br>Contenu de la variable : " + test;
    console.log(test);