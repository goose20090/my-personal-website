let nrc= document.getElementById("nrc");

nrc.addEventListener("mouseenter", function(event){
    event.target.src = "with-arrow.jpg";
})

nrc.addEventListener("mouseleave", function(event){
    event.target.src = "without-arrow.jpg";
})