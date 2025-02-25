const buttEl=document.getElementById("calculate");
const billEl=document.getElementById("bill")
const tipEl=document.getElementById("tip");
const totalEl=document.getElementById("total");


function calculateTotal(){
    const billValue=billEl.value;
    const tipValue=tipEl.value;
    const totalValue=billValue*(1+tipValue/100);
    totalEl.innerText=totalValue.toFixed(2);
    
}

buttEl.addEventListener("click",calculateTotal);