let nrc= document.getElementById("nrc");

nrc.addEventListener("mouseenter", function(event){
    event.target.src = "with-arrow.jpg";
})

nrc.addEventListener("mouseleave", function(event){
    event.target.src = "without-arrow.jpg";
})
/*
let selfie= document.getElementById("selfie")

selfie.addEventListener('mouseover', function(event){
    event.target.src = '42993.jpeg';
})

selfie.addEventListener('mouseleave', function(event){
    event.target.src ='photo-of-me.jpeg';
   
})*/