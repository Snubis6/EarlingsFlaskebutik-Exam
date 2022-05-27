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

document.getElementById("newsletter-SubmitButton").onclick = function () {
  
}
// window.onload = function() {
//   if (document.getElementsByClassName("Header").style.display === "flex") {
//     document.getElementsByClassName("Header").style.display = "none";
//   }
// };

};