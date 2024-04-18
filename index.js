var x = new Audio("diceSound.mp3")
function randomDice(){
var d1 = Math.floor(Math.random()*6)+1;
var res1 = d1+".png";
var im1 = document.querySelectorAll("img")[0];
im1.setAttribute("src", res1);
var d2 = Math.floor(Math.random()*6)+1;
var res2 = d2+".png";
var im2 = document.querySelectorAll("img")[1];
im2.setAttribute("src", res2);
x.play();
if (d1 > d2){
document.getElementById("result").innerHTML="PLAYER 1 WON THE GAME";
document.querySelector(".hulk").style.visibility = 'visible';
setTimeout(function() {
    document.getElementById("hulk").style.visibility = 'hidden';
},1500);
}
else if (d2 > d1){
    document.getElementById("result").innerHTML="PLAYER 2 WON THE GAME";
    document.querySelector("#thor").style.visibility = 'visible';
setTimeout(function() {
    document.getElementById("thor").style.visibility = 'hidden';
},1500);
}
else {
    document.getElementById("result").innerHTML="DRAW";
    document.querySelector(".hulk").style.visibility = 'visible';
    document.querySelector("#thor").style.visibility = 'visible';
setTimeout(function() {
    document.querySelector("#hulk").style.visibility = 'hidden';
    document.querySelector("#thor").style.visibility = 'hidden';
},2000);

}
}
