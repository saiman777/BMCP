function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  
  setTimeout(function fade() {
    document.getElementById("overlay").style.opacity = "0";
    setTimeout(function(){ document.getElementById("overlay").style.display = "none";}, 1100);
    },2000);

    
