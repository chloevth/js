let btnAll = document.getElementById('btnAll');
let btnSummer = document.getElementById('btnSummer');
let btnAutumn = document.getElementById('btnAutumn');
let btnWinter = document.getElementById('btnWinter');
let btnSpring = document.getElementById('btnSpring');

btnAll.addEventListener('click', function(){
    console.log('le bouton all fonctionne');
    let summerClass = document.getElementsByClassName('summer');
    let winterClass = document.getElementsByClassName('winter');
    let autumnClass = document.getElementsByClassName('autumn');
    let springClass = document.getElementsByClassName('spring');

    for (let i = 0; i < summerClass.length; i++) {
        console.log(summerClass[i]);
        autumnClass[i].classList.remove('hide');
        summerClass[i].classList.remove('hide');
        winterClass[i].classList.remove('hide');
        springClass[i].classList.remove('hide');
    }

    
})

btnSummer.addEventListener('click', function(){
    console.log('le bouton summer fonctionne');
    let summerClass = document.getElementsByClassName('summer');
    let winterClass = document.getElementsByClassName('winter');
    let autumnClass = document.getElementsByClassName('autumn');
    let springClass = document.getElementsByClassName('spring');

    for (let i = 0; i < summerClass.length; i++) {
        console.log(summerClass[i]);
        summerClass[i].classList.add('show');
        summerClass[i].classList.remove('hide');
        winterClass[i].classList.add('hide');
        autumnClass[i].classList.add('hide');
        springClass[i].classList.add('hide');
    }
   
})

btnAutumn.addEventListener('click', function(){
    console.log('le bouton autumn fonctionne');
    let summerClass = document.getElementsByClassName('summer');
    let winterClass = document.getElementsByClassName('winter');
    let autumnClass = document.getElementsByClassName('autumn');
    let springClass = document.getElementsByClassName('spring');

    for (let i = 0; i < summerClass.length; i++) {
        console.log(summerClass[i]);
        summerClass[i].classList.add('hide');
        winterClass[i].classList.add('hide');
        autumnClass[i].classList.add('show');
        autumnClass[i].classList.remove('hide');
        springClass[i].classList.add('hide');
    }
})

btnWinter.addEventListener('click', function(){
    console.log('le bouton winter fonctionne');
    let summerClass = document.getElementsByClassName('summer');
    let winterClass = document.getElementsByClassName('winter');
    let autumnClass = document.getElementsByClassName('autumn');
    let springClass = document.getElementsByClassName('spring');

    for (let i = 0; i < summerClass.length; i++) {
        console.log(summerClass[i]);
        summerClass[i].classList.add('hide');
        winterClass[i].classList.add('show');
        winterClass[i].classList.remove('hide');
        autumnClass[i].classList.add('hide');
        springClass[i].classList.add('hide');
    }
    
})

btnSpring.addEventListener('click', function(){
    console.log('le bouton spring fonctionne');
    let summerClass = document.getElementsByClassName('summer');
    let winterClass = document.getElementsByClassName('winter');
    let autumnClass = document.getElementsByClassName('autumn');
    let springClass = document.getElementsByClassName('spring');

    for (let i = 0; i < summerClass.length; i++) {
        console.log(summerClass[i]);
        summerClass[i].classList.add('hide');
        winterClass[i].classList.add('hide');
        autumnClass[i].classList.add('hide');
        springClass[i].classList.add('show');
        springClass[i].classList.remove('hide');
    }
})