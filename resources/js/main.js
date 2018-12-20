// JavaScript 

var slideIndex = 1;
showSlides(slideIndex);
setTimeout(function(){ console.log("Hello"); }, 3000);

// next / prev controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// image function call 
function currentSlide(n) {
  showSlides(slideIndex = n);	
}

  var slideIndex = 0;
    
  function autoSlides() {
    var i;
    var slides = document.getElementsByClassName("image");
}



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



var button = document.getElementById('demo');

function playPause() { 
  var element = document.getElementById("play");
    element.classList.toggle('imgPause');
    document.querySelector('#element');
   
    if (element == 'imgPlay') {
      element.classList.remove('imgPause')
      while(element === 'imgPlay') {
      
      }
    }
    else {
      element.classList.add('imgPlay');
    }
}



/*var slideindex = 0;
var timer;
var i;

function autoPlay() {
  var x = document.getElementsByClassName('image');
  
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
    slideIndex++;
  }
  
  if (slideIndex > x.length -1; i++) {
    slideIndex = 1;
  } 
  else {
    i = 0;
}
  x[slideIndex-1].style.display = 'block';
  timer = setInterval("autoPlay()", 500);
}
*/




 


 // button.addEventListener('click', playPause());

