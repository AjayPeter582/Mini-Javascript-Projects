const textareaEl=document.getElementById("textarea");
const totalCounterEL=document.getElementById("total-counter");
const remainingCounterEL=document.getElementById("remaining-counter");
const bodyTag=document.getElementsByTagName("body")[0];
const headingTagEl=document.getElementsByTagName("h1");

textareaEl.addEventListener("keyup",()=>{
    updateCounter();
})

updateCounter();

function updateCounter(){
    totalCounterEL.innerText=textareaEl.value.length;
    let remainingCounter=textareaEl.getAttribute("maxlength")-textareaEl.value.length
    remainingCounterEL.innerText=remainingCounter;
    if(remainingCounter===0){
        bodyTag.classList.add("blink");
        setTimeout(() => {
            bodyTag.classList.remove("blink");
        }, 1000);
    }
}