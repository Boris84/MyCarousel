// JavaScript 

var slideIndex = 1;
showSlides(slideIndex);


// next / prev controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// image function call 
function currentSlide(n) {
showSlides(slideIndex = n);	
}
    
function autoSlides() {
var x;
var slides = document.getElementsByClassName("image");
}

var slideIndex = 0;

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("image");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
    slides[slideIndex-1].style.display = "block"; 
}

var playing = 

document.getElementById("play").onclick = function playSlideShow() {
var slides = document.getElementsByClassName("image");
var slideIndex = 0;
var i;

function autoPlay(n) {
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i+=1) {
    slides[i].style.display = "block";
  }
    plusSlides(1); 
    playing = true; 
}

var myTimer =  window.setInterval(autoPlay, 3000);


document.getElementById("play").onclick = pauseSlideShow;
var slides = document.getElementsByClassName("image");

 function pauseSlideShow(n) {
    if (playing == true) {
      playing = false;
      clearInterval(myTimer);
      play.onclick = playSlideShow;
    }
 } 
};






 



