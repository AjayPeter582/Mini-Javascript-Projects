const testimonials=[
    {
        name:"Oscar F",
        photoUrl:"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"I have been using Apple for over a year now and I love it! I can't imagine life without it. It's so easy to use, and the customer service is great."
    },
    {
        name:"Grand Master",
        photoUrl:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"Game makes me more productive and gets the job done in a fraction of the time. I'm glad I found Game."
    },
    {
        name:"George G",
        photoUrl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        text:"I love Movie! This is an amazing service and it has saved me and my small business so much time. I plan to use it for a long time to come."
    },
]

const imgEl=document.querySelector("img");
const textEl=document.querySelector(".text");
const usernameEL=document.querySelector(".username");

let idx=0;

updateTestimonial();

function updateTestimonial(){
    const {name,photoUrl,text}=testimonials[idx];
    imgEl.src=photoUrl;
    textEl.innerText=text;
    usernameEL.innerText=name;
    idx++;
    setTimeout(updateTestimonial,8000)
    if(idx===testimonials.length){
        idx=0;
    }
}