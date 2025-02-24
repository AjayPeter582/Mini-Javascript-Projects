const imageContainerEL=document.querySelector(".image-container");

const prevEL=document.getElementById("prev");
const nextEL=document.getElementById("next");

let x=0;

let timer;

prevEL.addEventListener("click",()=>{
    x=x+45;
    clearTimeout(timer);
    updateGallery();
});

nextEL.addEventListener("click",()=>{
    x=x-45;
    clearTimeout(timer);
    updateGallery();
});

function updateGallery(){
    imageContainerEL.style.transform=`perspective(1000px) rotateY(${x}deg)`;
    timer=setTimeout(()=>{
        x=x-45;
        updateGallery();
    },3000);
}

updateGallery();