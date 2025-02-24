const buttEl=document.querySelector(".butt");

const imageContainerEl=document.querySelector(".image-container");

const headingEl=document.querySelector(".heading");

let characterIndex=0;
let word="Random Photo Generator";
updateText();

function updateText(){
    characterIndex++;
    headingEl.innerHTML=`<h1>${word.slice(0,characterIndex)}</h1>`;
    setTimeout(updateText,200);
    if(characterIndex===word.length){
        characterIndex=0;
    }
}

buttEl.addEventListener("click",()=>{
    addNewImages();
})

function addNewImages(){
    for(let i=0;i<10;i++){
        const newImageEl=document.createElement("img");
        newImageEl.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
        imageContainerEl.appendChild(newImageEl);
    }
}