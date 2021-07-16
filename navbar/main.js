/*let navPrevPosition = window.pageYOffset;
window.onscroll = slideDown;
function slideDown() {
    let navScrollPosition = window.pageYOffset;
    if (navPrevPosition < navScrollPosition) {
       document.getElementById('navbar').style.top ='0';
   } else {
        document.getElementById('navbar').style.top ='';
   }

 navPrevPosition = navScrollPosition;
}*/

/*
window.onscroll = slideDown;
function slideDown() {
    if (document.body.scrollTop > 56 || document.documentElement.scrollTop > 56) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "";
    }
    }*/

// code de Gaël ci-dessous
window.onscroll = () =>{
    if (window.scrollY > 0){
        document.getElementById('navbar').style.top = "0";
    } else {
        document.getElementById('navbar').style.top = "-56px";
    }
}
/*version non factorisée
window.addEventListener('scroll', function(){
    if (window.scrollY > 0){
        document.getElementById('navbar').style.top = "0";
    } else {
        document.getElementById('navbar').style.top = "-56px";
    }
});*/