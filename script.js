let usergame=[];
let origame=[]
let level=0;
let h2=document.querySelector("h2");
let started=false;
let arr=["yellow","red","purple","green"];

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelup();
    }
});

function flash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}
function levelup(){
    level++;
    usergame=[];
    h2.innerText=`Level ${level}`;
    let rdm=Math.floor(Math.random()*3);
    let rdmcol=arr[rdm];
    let rdmbtn=document.querySelector(`.${rdmcol}`);
    origame.push(rdmcol);
    console.log(origame);
    flash(rdmbtn);
}

function match(ind){
    if(usergame[ind]==origame[ind]){
        if(ind==origame.length-1){
            levelup();
        }
    }
    else{
        let score=(level-1)*(level)/2;
        h2.innerText=`Your Score is ${score+usergame.length-1} and Game Over Please Press Any Key To Start again`;
        reset();
    }
}
function btnPress(e){
    let btn=this;
    console.log(btn);
    flash(btn);
    let userclr=btn.getAttribute("id");
    usergame.push(userclr);
    match(usergame.length-1);
    console.log(usergame);
}

let btns=document.querySelectorAll(".box");
for(btn of btns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    level=0;
}
