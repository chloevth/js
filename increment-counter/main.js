const counter=document.getElementById('counter');
const buttonMinus=document.getElementById('minus');
const buttonPlus=document.getElementById('plus');
let counterValue=0;
const applePrice =0.97;
const total = document.getElementById('total');

buttonPlus.addEventListener('click', function(){
    counterValue++;
    counter.innerHTML = counterValue*applePrice;
    if(counterValue==1){
        counter.innerHTML=counterValue + ' article';
    } else {
        counter.innerHTML=counterValue + ' articles';
        total.innerHTML = calculPrice;
    }

});

buttonMinus.addEventListener('click', function(){
    counterValue--;
    if(counterValue<=0){
        counterValue=0;
        counter.innerHTML=counterValue + ' article';
    } else if(counterValue==1){
        counter.innerHTML=counterValue + ' article';
    } else {
        counter.innerHTML=counterValue + ' articles';
    }
    
});


