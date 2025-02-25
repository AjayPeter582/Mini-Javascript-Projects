const buttEL=document.querySelector(".butt");

buttEL.addEventListener("mouseover",(event)=>{
    const x=event.pageX - buttEL.offsetLeft;
    const y=event.pageY - buttEL.offsetTop;

    buttEL.style.setProperty("--xPos", x + "px");
    buttEL.style.setProperty("--yPos", y + "px");

});