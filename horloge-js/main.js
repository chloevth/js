const displayHours = document.getElementById('digital-clock__time--hours');
const displayMinutes = document.getElementById('digital-clock__time--minutes');
const displaySeconds = document.getElementById('digital-clock__time--seconds');
const displayDay = document.getElementById('digital-clock__date--day');

const displayAnalogHours = document.getElementById('analog-clock__hours');
const displayAnalogMinutes = document.getElementById('analog-clock__minutes');
const displayAnalogSeconds = document.getElementById('analog-clock__seconds');

const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

function clock(){
    let date = new Date(); 
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day = date.toLocaleDateString('fr-FR',options);
      seconds = seconds<10?"0"+seconds:seconds;
      minutes = minutes<10?"0"+minutes:minutes;
      hours = hours<10?"0"+hours:hours;
/*     console.log(hours);
    console.log(minutes);
    console.log(date);
    console.log(seconds);
    console.log(day); */
    let hoursRotation = (hours*30)+(minutes*0.5);
    /* console.log(hoursRotation); */
    let minutesRotation = minutes*6;
    let secondsRotation = seconds*6;
    /* console.log(secondsRotation); */
    displayHours.innerHTML=hours;
    displayMinutes.innerHTML=minutes;
    displaySeconds.innerHTML =seconds;
    displayDay.innerHTML = day;

    

    displayAnalogHours.style.transform = `rotate(${hoursRotation}deg)`;
    displayAnalogSeconds.style.transform = `rotate(${secondsRotation}deg)`;
    displayAnalogMinutes.style.transform = `rotate(${minutesRotation}deg)`;
    
}
clock();

setInterval(clock,1000);