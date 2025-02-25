const kits=["crash","kick","snare","tom"];
const containerEL=document.querySelector(".container");

kits.forEach(kit=>{
    const buttEl=document.createElement("button");
    buttEl.classList.add("butt");
    buttEl.innerText=kit;
    buttEl.style.backgroundImage="url(images/"+kit+".png)";
    containerEL.appendChild(buttEl);
    const audioEl=document.createElement("audio");
    audioEl.src="sounds/"+kit+".mp3";
    containerEL.appendChild(audioEl);
    buttEl.addEventListener("click",()=>{
        audioEl.play();
    });
    window.addEventListener("keydown",(event)=>{
        if(event.key===kit.slice(0,1)){
            audioEl.play();
            buttEl.style.transform="scale(0.9)";
            setTimeout(()=>{
                buttEl.style.transform="scale(1)";
            },100)
        }
    })
})