const countersEL=document.querySelectorAll(".counter");


countersEL.forEach(counterEL=>{
    counterEL.innerText="0"
    incrementCounter();
    function incrementCounter(){
        let currentNum=+counterEL.innerText
        const dataCeil=counterEL.getAttribute("data-ceil")
        const increment=dataCeil/15
        currentNum=Math.ceil(currentNum+increment)
        
        if(currentNum<dataCeil){
            counterEL.innerText=currentNum
            setTimeout(incrementCounter,50)
        }
        else{
            counterEL.innerText=dataCeil;
        }
    }
});