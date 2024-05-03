let userScore=0;
let comScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const comscore=document.querySelector("#com-score");
msg.onclick=()=>{
    msg.innerText="Game was start";
    msg.style.backgroundColor="yellow";

};
const computerChoice=()=>{
    const options=["rock","paper","scissor"];
    //random
    const random=Math.floor(Math.random()*3);
    return options[random];
 };
const drawGame=()=>{
  
    msg.innerText="Game draw,Try again"
    msg.style.backgroundColor="aqua";
};
const Winner=(userWin)=>{

    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
       
        msg.innerText="You win";
        msg.style.backgroundColor="green";
    }
    else{
        comScore++;
        comscore.innerText=comScore;
       
        msg.innerText="You lose";
        msg.style.backgroundColor="red";
    }

};
 const playgame=(userchoice)=>{
    console.log("user choice:",userchoice)
    //computer choice
    const compchoice=computerChoice();
    console.log("computer choice:",compchoice);

    if(userchoice===compchoice){
        drawGame();
        
    }
    else{
        let userWin=true;
        if(userchoice=="rock"){
            //paper,secissor
            userWin=compchoice=="paper"?false:true;

        } else if(userchoice=="paper"){
            //seciso, rock
            userWin=compchoice=="rock"?true:false;
        }
        else{
            userWin=compchoice=="paper"?true:false;
        }
        Winner(userWin);

        }
    };
 

choices.forEach((choice) => {

    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
       playgame(userchoice);

    })

});
let start=document.querySelectorAll("#msg");
msg.addEventListener("click",()=>{
    console.log("lets start game");
});
