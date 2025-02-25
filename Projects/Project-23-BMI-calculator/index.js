const buttEl=document.getElementById("butt");
const bmiInputEl=document.getElementById('bmi-result');
const weightConditionEL=document.getElementById("weight-condition")


buttEl.addEventListener("click",()=>{
    const heightValue=document.getElementById("height").value/100;
    const weightValue=document.getElementById("weight").value;
    const bmiValue=weightValue/(heightValue*heightValue);
    bmiInputEl.value=bmiValue;
    if(bmiValue<18.5){
        weightConditionEL.innerText=" Under weight"
    }
    else if(bmiValue>=18.5 && bmiValue<=24.5){
         weightConditionEL.innerText=" Normal weight"
    }
    else if(bmiValue>=25 && bmiValue<=29.9){
        weightConditionEL.innerText=" Overweight";
    }
    else{
        weightConditionEL.innerText=" Obesity";
    }
})