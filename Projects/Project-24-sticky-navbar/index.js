const navbarEl=document.querySelector(".navbar");
const bottomContainerEl=document.querySelector(".bottom-container");

console.log(bottomContainerEl.offsetTop);

window.addEventListener("scroll",()=>{
    if(window.scrollY>bottomContainerEl.offsetTop -navbarEl.offsetHeight-50){
        navbarEl.classList.add("active");
        console.log(window.scrollY);
    }
    else{
        navbarEl.classList.remove("active");
    }
})