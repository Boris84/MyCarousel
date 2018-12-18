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
  console.log(slides)
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
    }
    else {
      element.classList.add('imgPlay');
    }
}



 // button.addEventListener('click', playPause());

