function isPalindrome(word) {
    let longueur = word.length - 1;
    for(let i = 0; i < longueur / 2; i++){
        console.log(i, word.charAt(i), word.charAt(longueur - i))

        if (word.charAt(i) !== word.charAt(longueur- i)) {
            return false;
        }
    }
    return true;
    }

/* correction de nathan
    function pal(mot){
        let len= mot.length-1;
        for(let i =0; i<len/2; i++){
        console.log(i, mot.charAt(i), mot.charAt(len-i))
        if(mot.charAt(i) !==mot.charAt(len-i)){
        return false;
        }
        }
        return true;
        }

        ilf aut taper directement dans la console :
        pal('blabla')


        Correction de Gaël

        pal = (word) => {
word = prompt("Entrez un mot").toLowerCase();
console.log(word);
reversed = [...word].reverse().join("");
if (word == reversed) console.log("C'est un palindrome");
else console.log("Ce n'est pas un palindrome");
};
pal();

solution de MIckaël
function palindrome(mot) {
mot = mot.toLowerCase().replaceAll(" ", "")
let fin = mot.length - 1
for(let i = 0; i < fin / 2; i++) {
if(mot.charAt(i) !== mot.charAt(fin - i))
return false
}
return true
}


        
        */