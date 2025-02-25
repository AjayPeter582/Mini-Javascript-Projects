const buttEl=document.querySelector(".butt");
const closeIconEl=document.querySelector(".close-icon")
const trailerContainerEl=document.querySelector(".trailer-container");
const videoEl=document.querySelector("video");
buttEl.addEventListener("click",()=>{
    trailerContainerEl.classList.remove("active");
})

closeIconEl.addEventListener("click",()=>{
    trailerContainerEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime=0;

})


