let btn=document.querySelector('#reset');
let turn_info=document.querySelector('.info')
let gameOver=false;
function reset(){
let boxes=document.getElementsByClassName('box');
Array.from(boxes).forEach((e)=>{
    let txt=e.querySelector('.boxText');
    txt.innerHTML="";
    
})
turn="X";
document.querySelector('.info').innerText="Turn for "+turn;
gameOver=false;
c=0;
 let gif= document.querySelector('.won');
            gif.style.display='none';
}


function checkWin()
{
    let text=document.getElementsByClassName('boxText');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e=>{
    if((text[e[0]].innerText===text[e[1]].innerText) && (text[e[1]].innerText===text[e[2]].innerText && text[e[0]].innerText!==''))
    {    document.querySelector('.info').innerText= text[e[0]].innerText+ " Wins";
            gameOver=true;
           let gif= document.querySelector('.won');
            gif.style.display='block';
    
    }
    })
    
      
    
}
let turn="X";
const changeTurn=()=>{
  return turn === "X"?"O":"X"
}


btn.addEventListener('click',()=>reset());
let c=0;
let box=document.getElementsByClassName("box")
Array.from(box).forEach(element=>{
    let text=element.querySelector('.boxText');
    element.addEventListener('click',()=>{
        c++;
    
        if(text.innerText==='')
            text.innerText=turn;
        turn=changeTurn();
        let audioTurn=new Audio("play.mp3")
        audioTurn.volume=0.2;
        audioTurn.play();
        turn_info.innerText=`Turn for ${turn}`;
        checkWin();
             if(c===9 && !gameOver)
        {
            c=0;
             document.querySelector('.info').innerText="It's a Draw";
        }})

})

