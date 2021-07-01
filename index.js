var score = 0;
var touched;

var audio1 = new Audio('./audio1.wav')
var over1 = new Audio('./over.wav')
//var highscore = 0;
//var highscore = localStorage.getItem("myscore"); 

var up = document.querySelector('.ceiling1');
var down = document.querySelector('.ground1');
var box = document.querySelector('.box');
var hole1 = document.querySelector('.hole1');
var hole2 = document.querySelector('.hole2');
var bg = document.querySelector('.bg');
var check  = document.querySelector('h2');

var scr = document.querySelector('.end1'); 

function reload() {
location.reload();

}
/*
up.ontouchstart = function () {
box = document.querySelector('.box');
box.style.top = 248 +'px'
//box.classList.add('doUp');
}
//setTimeout()()(() => {
down.ontouchstart = function () {

box = document.querySelector('.box');
//box.innerHTML = up.style.bottom
box.style.top = 470+'px';
}*/

//box.classList.remove('doDown');
//},20000);
setInterval(() => {
/*function reload() {
reload = location.reload();

*/
bx = parseInt(window.getComputedStyle(box,null).getPropertyValue('left'));
by = parseInt(window.getComputedStyle(box,null).getPropertyValue('top'));
bw = parseInt(window.getComputedStyle(box,null).getPropertyValue('border-bottom'));
bh = parseInt(window.getComputedStyle(box,null).getPropertyValue('border-bottom'));


h1x = parseInt(window.getComputedStyle(hole1,null).getPropertyValue('left'));
h2x = parseInt(window.getComputedStyle(hole2,null).getPropertyValue('left'));

h1y = parseInt(window.getComputedStyle(hole1,null).getPropertyValue('bottom'));
h2y = parseInt(window.getComputedStyle(hole2,null).getPropertyValue('top'));


x1 = Math.abs((bx+bw)-h1x) ; //dist b/w hole1 and box in x dir;

x2 = Math.abs((bx + bw )-h2x) ; 

y1 = Math.abs((by)-(h1y)) ;
y2 = Math.abs((by+bh)-h2y) ;
bon = Math.abs(h1x-h2x); // its makong difficult some time i will think best way 
console.log(y2)
//function check1() {
//check.innerHTML = bx+' ' + by + ' ' + bw +' ' + bh + ' ' + ' '+ h1x + ' ' + h2x + ' ' + h1y + ' ' + h2y + ' ' + x1 + " " + x2 + " " + y1 + " " + y2 +" " + h1x;


if((x1 < 30 && y1 > 100 )   || (x2 < 30 && y2 < 15 )) {
btnS = document.querySelector('.btnS');
btnS.style.visibility = 'visible'
  over1.play();
/*setTimeout((), =>{ 
audio1.pause();
},1000);
*/
btn = document.querySelector('.btn');
btn.style.visibility= 'visible';

hole1.classList.remove('moving1');
//box.classList.remove('box1');

hole2.classList.remove('moving2');

up.classList.remove('ceiling1'); 
down.classList.remove('ground1'); 


}

else if( (h1x < 15  && h1x > 0) || (h2x < 15 && h2x>0) ) {
//setInterval(() => {
score  += 1; 
getscore(score);
audio1.play();
//}, 2000); 
// ontouchstart?
}
/*
up.ontouchstart = function (touched) {

//box = document.querySelector('.box1');
box.style.top = 29 + '%'
//box.classList.add('doUp');
box.style.transform = 'rotate(180deg)';
touched = true; 
}*/
//getscore(score);
//setInterval(() => {
//or ontouchstart?
//if(touched == true) { 
down.ontouchstart= function () {
//console.log("ram");
//audio1.play()
//box = document.querySelector('.box');
//box.innerHTML = up.style.bottom
//box.classList.add("doDown");

//box.style.top = 71+'%';
//if(window.matchMedia("max-height:  
box.style.transform = 'rotate(0deg)';

box.style.top= 66+'%';

//if(x.
}
up.ontouchstart = function (touched) {

//box = document.querySelector('.box1');
box.style.top = 29 + '%'
//box.classList.add('doUp');
box.style.transform = 'rotate(180deg)';
touched = true; 
}

//},2000);



},10);
//document.querySelector('.high').innerHTML = "highscosnndnmdre"; 



var highscore = localStorage.getItem("score"); 


function getscore(score) {
//mvar a = localStorage.setItem("sav",score);
check.innerHTML = "Score : " + score ;


//var highscore = localStorage.getItem("myscore"); 
//scr.innerHTML = "Your Score : " + highscore;
//var p =  highscore;

if(score >  highscore){

highscore = score ; 
}
//highscore = Math.max(score,highscore)
//document.querySelector('.high').innerHTML = highscore; 
localStorage.setItem("score",highscore);
//getscore(score); 



//document.querySelector('.high').innerHTML = "/"+ highscore; 

scr.innerHTML = "Your Score : " + score;
document.querySelector('.highS').innerHTML = " Best Score : "+ highscore;
document.querySelector('.high').innerHTML = " / "+highscore; 

}
