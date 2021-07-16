let verifColor = 0;
console.log(verifColor);
document.getElementById('square').addEventListener('click', function(){
    if (verifColor == 0) {
        document.getElementById('square').style.backgroundColor = 'red';
        verifColor = 1;
        console.log(verifColor);
    } else if (verifColor == 1){
        document.getElementById('square').style.backgroundColor = 'blue';
        verifColor = 2;
        console.log(verifColor);
    } else {
        document.getElementById('square').style.backgroundColor = 'brown';
        verifColor = 0;
        console.log(verifColor);
    }
})