for (let i = 0; i < 100; i++) {
    console.log(i);
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');  
    }
    else if (i % 3 == 0) {
        console.log('Fizz');
    } else if (i % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}


/*Défi JS du jour : le FizzBuzz
si le nombre est divisible par 3 : on écrit Fizz
si le nombre est divisible par 5 : on écrit Buzz
si le nombre est divisible par 3 et par 5 : on écrit Fizzbuzz
sinon : on écrit le nombre
Faire une boucle qui incrémente i jusqu'à 100, et afficher i à chaque tour de boucle */
