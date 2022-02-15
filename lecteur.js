var tonImg  = document.querySelector(".cover");
var taVideo   = document.querySelector(".player");
var movie   = document.querySelector(".video");

document.querySelector(".module3").addEventListener('click',(e)=>{
    tonImg.style.display = "none";
    taVideo.style.display = "block";
    movie.src ="https://www.youtube.com/embed/svZcJs5Epew?rel=0&autoplay=1"

  });
