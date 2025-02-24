const dayEL=document.getElementById("day")
const hourEL=document.getElementById("hour")
const minuteEl=document.getElementById("minute")
const secondEL=document.getElementById("second")
const yearEl=document.querySelector("year");

const currYear=new Date().getFullYear();

const newYearTime=new Date(`Jan 1, ${currYear+1} 00:00:00`).getTime();
console.log(currYear+2)
updateCountdown();
yearEl.innerText = `${currYear + 2}`;

function updateCountdown(){
    const now=new Date().getTime();
    const gap=newYearTime-now;
    
    const second=1000;

    const minute=second*60;
    const hour=minute*60;
    const day=hour*24;

    const d=Math.floor(gap/day);
    const h=Math.floor((gap%day)/hour);
    const m=Math.floor((gap%hour)/minute);
    const s=Math.floor((gap%minute)/second);

    dayEL.innerText=d;
    hourEL.innerText=h;
    minuteEl.innerText=m;
    secondEL.innerText=s;
    setTimeout(updateCountdown,1000);
}