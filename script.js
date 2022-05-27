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

var modal = document.getElementById("myModal");
var btn = document.getElementById("newsletter-SubmitButton");
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";

  }
}
btn.addEventListener('click', function handleClick(event) {
  
  event.preventDefault();

  const email = document.getElementById('email');

  email.value = '';
});
// window.onload = function() {
//   if (document.getElementsByClassName("Header").style.display === "flex") {
//     document.getElementsByClassName("Header").style.display = "none";
//   }
// };

