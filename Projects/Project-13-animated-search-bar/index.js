const searchBarContainer=document.querySelector(".search-bar-container");
const magnifierEL=document.querySelector(".magnifier");

magnifierEL.addEventListener("click",()=>{
    searchBarContainer.classList.toggle("active")
})