window.onload = function(){
document.getElementById("Yes").onclick = function () {
    location.href = "./entrance.html";
    
};
     
document.getElementById("No").onclick = function () {    
  if (document.getElementById("question-Box").style.display === "none") {
    document.getElementById("question-Box").style.display = "block";
  } else {
    document.getElementById("question-Box").style.display = "none";
    document.getElementById("no-Box").style.display = "block";
  } 
    
};
};