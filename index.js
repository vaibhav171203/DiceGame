
var randomNumber1=Math.random();
var randomNumber2=Math.random();
randomNumber1=Math.floor((randomNumber1*6) +1);
randomNumber2=Math.floor((randomNumber2*6) +1);
var randomImageSource="./images/dice"+ randomNumber1 +".png";
var randomImageSource1="./images/dice"+ randomNumber2 +".png";
var image=document.querySelectorAll("img")[0];
image.setAttribute("src",randomImageSource);
//document.querySelector("img1").setAttribute("src",randomImageSource);
//document.querySelector("img2").setAttribute("src",randomImageSource1);
var image1=document.querySelectorAll("img")[1];
image1.setAttribute("src",randomImageSource1);
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
    var success= document.getElementById("sound.mp3");
    success.play();
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins";
    var success= new Audio("sound.mp3");
}
else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="It's a Draw";
}
function playAudio(){
    success.play();
}

