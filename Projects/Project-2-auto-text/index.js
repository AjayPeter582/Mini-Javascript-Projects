const containerEl=document.querySelector(".container")

const roles=["batman","Ironman","Gustavo Fring","Walter Heartwell White"];

let rolesIndex=0;

let characterIndex=0;

updateText();
//${roles[rolesIndex].slice(0,1)==="I"?"an":"a"}
function updateText(){
    characterIndex++;
    containerEl.innerHTML=`<h1>I am 
    ${roles[rolesIndex].slice(0,characterIndex)}</h1>`;
    setTimeout(updateText,400);
    if(characterIndex===roles[rolesIndex].length){
        rolesIndex++;
        characterIndex=0;  
    }
    if(rolesIndex===roles.length){
        rolesIndex=0;
    }
}
