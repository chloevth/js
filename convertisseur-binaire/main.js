const convert = document.getElementById("convert");
const crypted = document.getElementById("crypted");

convert.addEventListener("click", function(){
    let code = document.getElementById("msgToCode").value;
    crypted.innerHTML = "";
    for (let i = 0; i < code.length; i++) {
        crypted.innerHTML += code[i].charCodeAt(0).toString(2) + ' ';
        
    }
   
});

