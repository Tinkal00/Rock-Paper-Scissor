let userScore=0;
let compScore=0;
const csVar=document.querySelector("#comp-score")
const usVar=document.querySelector("#user-score")

let choises=document.querySelectorAll(".choise");
let getCompChoise=()=>{
    let arr=["rock","paper","scissor"];
    let val=Math.floor(Math.random()*3);
    return arr[val];
}

choises.forEach((val)=>{
    val.addEventListener("click",()=>{
        let userChoise=val.getAttribute("id");
        console.log("user choise :", userChoise);
        let compChoise=getCompChoise();
        console.log("comuter choise :",compChoise);
        if(userChoise===compChoise){draw();}
        else if(userChoise==="rock" && compChoise==="paper"){compWin();}
        else if(userChoise==="rock" && compChoise==="scissor"){userWin();}
        else if(userChoise==="paper" && compChoise==="rock"){userWin();}
        else if(userChoise==="paper" && compChoise==="scissor"){compWin();}
        else if(userChoise==="scissor" && compChoise==="rock"){compWin();}
        else if(userChoise==="scissor" && compChoise==="paper"){userWin();}
        let p=document.querySelector("p");
        p.innerText="Computer Choise : "+ compChoise
    })
    
})

let draw=()=>{
    d51=document.querySelector("#d51");
    d51.innerText="Match Draw"
    d51.style.backgroundColor="yellow";
    console.log("Match Draw");
    console.log(" ");
}
let compWin=()=>{
    d51=document.querySelector("#d51");
    d51.innerText="Ohh... Computer Win"
    d51.style.backgroundColor="red";
    console.log("Computer Win");
    console.log(" ");
    compScore++;
    csVar.innerText=compScore
}
let userWin=()=>{ 
    d51=document.querySelector("#d51");
    d51.innerText="You Win 🎉"
    d51.style.backgroundColor="#28f005";
    console.log("User Win");
    console.log(" ");
    userScore++;
    usVar.innerText=userScore
}