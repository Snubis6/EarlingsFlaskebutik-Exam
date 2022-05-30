const productContainer = document.querySelector(".product-Contents-Box");
const form = document.getElementById("tagSearch");
const searchTag = document.querySelector('.tagsSubmitBtn');
const btnTag = document.getElementById("tags-submit");
const clearTag = document.getElementById("tags-clear");
const aleTag = document.querySelector('.tagsAleBtn');
const lagerTag = document.querySelector('.tagsLagerBtn');
let productBox = "";


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
 window.onload = function(e)
 {
   e.preventDefault();
    
     productContainer.innerHTML="";
     for( const product of products){
       productBox = `
       <div class="box-Product" id="productBox">
         <img style="width: 100px; height: 200px;" src="${product.image}" class="box-Product-Image" id="productBoxImage"><br>
         <p class="box-Product-Name" id="productBoxName">${product.name}</p><br>
         <p class="box-Product-Description" id="productBoxDescription">${product.subtype}</p><br>
         <p class="box-Product-Price" id="productBoxPrice">${product.price}</p>
       </div>
       `;
       productContainer.insertAdjacentHTML("beforeend", productBox);
      
 }

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
};

aleTag.onclick = function(a) {
    a.preventDefault();
    productContainer.innerHTML="";
    for( const product of products){
      if( product.type == String('Ale')){
      productBox = `
      <div class="box-Product" id="productBox">
        <img style="width: 100px; height: auto;" src="${product.image}" class="box-Product-Image" id="productBoxImage"><br>
        <p class="box-Product-Name" id="productBoxName">${product.name}</p><br>
        <p class="box-Product-Description" id="productBoxDescription">${product.subtype}</p><br>
        <p class="box-Product-Price" id="productBoxPrice">${product.price}</p>
      </div>
      `;
      productContainer.insertAdjacentHTML("beforeend", productBox);
}}};

lagerTag.onclick = function(a) {
  a.preventDefault();
  productContainer.innerHTML="";
  for( const product of products){
    if( product.type == String('Lager')){
    productBox = `
    <div class="box-Product" id="productBox">
      <img style="width: 100px; height: auto;" src="${product.image}" class="box-Product-Image" id="productBoxImage"><br>
      <p class="box-Product-Name" id="productBoxName">${product.name}</p><br>
      <p class="box-Product-Description" id="productBoxDescription">${product.subtype}</p><br>
      <p class="box-Product-Price" id="productBoxPrice">${product.price}</p>
    </div>
    `;
    productContainer.insertAdjacentHTML("beforeend", productBox);
}}};





window.onload = function(){
  document.getElementById("Yes").onclick = function () {
      location.href = "./Events.html";
      
  };
       
  document.getElementById("No").onclick = function () {    
    if (document.getElementById("question-Box").style.display === "none") {
      document.getElementById("question-Box").style.display = "block";
    } else {
      document.getElementById("question-Box").style.display = "none";
      document.getElementById("no-Box").style.display = "block";
    } 
      
  };
}