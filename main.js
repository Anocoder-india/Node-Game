var pl = document.getElementById("pl");
var at = document.getElementById("at");
var result = document.getElementById("result");
var score = document.getElementById("score");
var btn = document.getElementById("btn");
var game  = document.getElementById("game");
var counter = 0;


at.addEventListener("animationiteration",()=>{
    at.style.left = ((Math.floor(Math.random()*3))*130 + "px");
    counter++
})

window.addEventListener("keydown",(e)=>{
    const pleft= parseInt(window.getComputedStyle(pl).getPropertyValue("left"));
    if(e.key == "ArrowRight"){if (pleft < 260){
        pl.style.left = (pleft + 130) + "px";
    }}
    if(e.key == "ArrowLeft"){
        if (pleft > 0){
        pl.style.left = (pleft - 130) + "px";
    }}
   
})

const hack = ()=>{
    window.open("https://youtube.com/shorts/VesWbZXals?featur=share")
} 
setInterval(
    function gameover(){
        const atl= parseInt(window.getComputedStyle(at).getPropertyValue("left"));
        const pll= parseInt(window.getComputedStyle(pl).getPropertyValue("left"));
        const att = parseInt(window.getComputedStyle(at).getPropertyValue("top"));
        if((atl ===pll)&&(att > 250)&&(att < 450)){
            result.style.display =  "block";
            game.style.display = "none";
            score.innerHTML = 'score:  ' + counter
            counter = 0;
    
        }  },10)


