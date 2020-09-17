var numberofSquares=6;
var colors=generateColors(numberofSquares);
var squares=document.querySelectorAll(".square");
var picked=pickColor();
var msg=document.getElementById("msg");
var h1=document.querySelector("h1");
var newColor=document.getElementById("newColor");
var easy=document.getElementById("easy");
var hard=document.getElementById("hard");
var streak=0;
var flag=true;
var S=document.getElementById("streak");
easy.addEventListener("click",function(){
    numberofSquares=3;
    colors=generateColors(numberofSquares);
    picked=pickColor();
    change.textContent=picked;
    easy.classList.add("selected");
    hard.classList.remove("selected");
    for(var i=0;i<squares.length;i++)
    {
        if(colors[i])
        {squares[i].style.backgroundColor=colors[i];}
        else
       { squares[i].style.display="none";}
    }
});
hard.addEventListener("click",function(){
    numberofSquares=6;
    colors=generateColors(numberofSquares);
    picked=pickColor();
    change.textContent=picked;
    hard.classList.add("selected");
    easy.classList.remove("selected");
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=colors[i];
        squares[i].style.display="block";
    }
});
for(var i=0;i<squares.length;i++)
{
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click",function(){
       var clickedColor= this.style.backgroundColor;
       if(clickedColor===picked)
        {
            if(flag)
                streak+=1; 
            msg.textContent="Correct";
            changeColors(picked);
            h1.style.backgroundColor=picked;
            newColor.textContent="Play Again";
            S.textContent=streak;
        }
        else
        {
            flag=false;
            streak=0;
            S.textContent=streak;
            this.style.backgroundColor="#232323";
            msg.textContent="Try Again";
        }
    });
}

var change=document.getElementById("display");
change.textContent=picked;

newColor.addEventListener("click",function(){
   
    
    if(!flag)
       {
            streak=0;
             flag=true;
        }
        S.textContent=streak;     
    colors=generateColors(numberofSquares);
    picked=pickColor();
    msg.textContent="";
    change.textContent=picked;
    newColor.textContent="New Colors";
    for(var i=0;i<squares.length;i++)
    {
     squares[i].style.backgroundColor=colors[i];
    }
    h1.style.backgroundColor="steelblue";
});
function changeColors(color)
{
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=color;
    }
}

function pickColor()
{
    var random=Math.floor(Math.random()*colors.length)
    return colors[random];
}

function generateColors(num)
{
    var arr=[];
    for(var i=0;i<num;i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var red=Math.floor(Math.random()*256);
    var green=Math.floor(Math.random()*256);
    var blue=Math.floor(Math.random()*256);
    return "rgb("+ red +", "+ green +", "+ blue +")";
}

