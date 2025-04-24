let userSc=0;
let compsc=0;

const choices = document.querySelectorAll(".choice");

const msg=document.querySelector(".ans");

let userScore=document.querySelector(".user-score");
let compscore=document.querySelector(".comp-score")
const genCompChoice = () =>{
    const options=["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
     return options[randIdx];
}


const playGame=(userChoice) => {
    console.log("user choice " , userChoice);
    const compChoice= genCompChoice();
    console.log("conp choice", compChoice);
    if((userChoice==="stone"&&compChoice==="scissors")||
    (userChoice==="paper"&&compChoice==="stone")||
    (userChoice==="scissors"&&compChoice==="paper")){
        userSc++;
        userScore.innerText=userSc;
        console.log("user won")
        msg.innerText="you won";
    }else if(userChoice===compChoice){
        console.log("draw");
        msg.innerIndex="draw";
    }else{
        compsc++;
        compscore.innerText=compsc;
        console.log("comp won")
        msg.innerText="you lost";
    }

};


choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice)
        
    })
})