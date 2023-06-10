var randomNo=Math.floor(Math.random()*6)+1; 

var randomImage="dice"+randomNo+".png";

var randomImageSource="images/"+randomImage;

var dice1=document.querySelectorAll("img")[0];

dice1.setAttribute("src",randomImageSource);



var randomNo2=Math.floor(Math.random()*6)+1;

var randomImage2="dice"+randomNo2+".png";

var randomImageSource2="images/"+randomImage2;

var dice2=document.querySelectorAll("img")[1]

dice2.setAttribute("src",randomImageSource2);




if(randomNo>randomNo2){
    document.querySelector("h1").innerHTML="player 1 wins";
}

else if(randomNo===randomNo2){
    document.querySelector("h1").textContent="draw";
}
else{
    document.querySelector("h1").textContent="player 2 wins";
}
