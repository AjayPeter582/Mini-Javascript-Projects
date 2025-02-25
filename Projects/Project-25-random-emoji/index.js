const buttEl=document.getElementById("butt");
const emojiNameEl=document.getElementById("emoji-name");

const emoji=[];

async function getEmoji(){
    let response=await fetch("https://emoji-api.com/emojis?access_key=190e85a0bba1703b0f52269a07d6d4c4cb34522e");

    data=await response.json();
    for(let i=0;i<1500;i++){
        emoji.push({
            emojiName:data[i].character,
            emojiCode:data[i].unicodeName,
        });
        
    }
    console.log(data);

}

getEmoji();

buttEl.addEventListener("click",()=>{
    let randomNum=Math.floor(Math.random()*emoji.length);
    buttEl.innerText=emoji[randomNum].emojiName;
    let sentence=emoji[randomNum].emojiCode;
    let words = sentence.split(" ");
    words.shift();
    let updatedSentence = words.join(" ");
    emojiNameEl.innerText=updatedSentence;
})