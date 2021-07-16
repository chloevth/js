const counterApple=document.getElementById('counterApple');
const buttonPlusApple=document.getElementById('plusApple');
const buttonMinusApple=document.getElementById('minusApple');

const counterBananas=document.getElementById('counterBananas');
const buttonPlusBananas=document.getElementById('plusBananas');
const buttonMinusBananas=document.getElementById('minusBananas');

const counterCherries=document.getElementById('counterCherries');
const buttonPlusCherries=document.getElementById('plusCherries');
const buttonMinusCherries=document.getElementById('minusCherries');

let counterValueApple=0;
const applePrice=0.97;
let counterValueBananas=0;
const bananasPrice=1.03;
let counterValueCherries=0;
const cherriesPrice=7.98;

const total=document.getElementById('total');

buttonPlusApple.addEventListener('click',moreApple);
buttonMinusApple.addEventListener('click',lessApple);
buttonPlusBananas.addEventListener('click',moreBananas);
buttonMinusBananas.addEventListener('click',lessBananas);
buttonPlusCherries.addEventListener('click',moreCherries);
buttonMinusCherries.addEventListener('click',lessCherries);

function moreApple(){
    counterValueApple++;
 
    counterApple.innerHTML=counterValueApple+' articles';
    if(counterValueApple== 1){
        counterApple.innerHTML=counterValueApple+' article';
    }
    else{
        counterApple.innerHTML=counterValueApple+' articles';  
    }
    document.getElementById("total").innerHTML=counterValueApple*applePrice;
}


function lessApple(){
    counterValue--;
 
    if(counterValueApple<=0){
        counterValueApple=0 ;
        counterApple.innerHTML=counterValueApple+' article';
    }
    else if(counterValueApple== 1){
        counterApple.innerHTML=counterValueApple+' article';
    }
    else{
        counterApple.innerHTML=counterValueApple+' articles';
    }
    document.getElementById("total").innerHTML=counterValueApple*applePrice;
}



function moreBananas(){
    counterValueBananas++;
 
    counterBananas.innerHTML=counterValueBananas+' articles';
    if(counterValueBananas== 1){
        counterBananas.innerHTML=counterValueBananas+' article';
    }
    else{
        counterBananas.innerHTML=counterValueBananas+' articles';  
    }
    document.getElementById("total").innerHTML=counterValueBananas*bananasPrice;
}


function lessBananas(){
    counterValue--;
 
    if(counterValueBananas<=0){
        counterValueBananas=0 ;
        counterBananas.innerHTML=counterValueBananas+' article';
    }
    else if(counterValueBananas== 1){
        counterBananas.innerHTML=counterValueBananas+' article';
    }
    else{
        counterBananas.innerHTML=counterValueBananas+' articles';
    }
    document.getElementById("total").innerHTML=counterValueBananas*bananasPrice;
}


function moreCherries(){
    counterValueCherries++;
 
    counterCherries.innerHTML=counterValueCherries+' articles';
    if(counterValueCherries== 1){
        counterCherries.innerHTML=counterValueCherries+' article';
    }
    else{
        counterCherries.innerHTML=counterValueCherries+' articles';  
    }
    document.getElementById("total").innerHTML=counterValueCherries*cherriesPrice;
}


function lessCherries(){
    counterValue--;
 
    if(counterValueCherries<=0){
        counterValueCherries=0 ;
        counterCherries.innerHTML=counterValueCherries+' article';
    }
    else if(counterValueCherries== 1){
        counterCherries.innerHTML=counterValueCherries+' article';
    }
    else{
        counterCherries.innerHTML=counterValueCherries+' articles';
    }
    document.getElementById("total").innerHTML=counterValueCherries*cherriesPrice;
}