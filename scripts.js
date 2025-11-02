// For small screens (menu)
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-solid-fa-bars');
    navbar.classList.toggle('open');
};

const formOpenBtn = document.querySelector("#form-open");
const home = document.querySelector(".home");
const formContainer = document.querySelector(".form-container");
const formCloseBtn = document.querySelector(".form-closer");
const rgstrBtn = document.querySelector("#signup");
const loginBtn = document.querySelector("#signin");
const passShowHide = document.querySelectorAll(".pass-hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

passShowHide.forEach((icon) => {
    icon.addEventListener("click", () => {
        let getPassInput = icon.parentElement.querySelector("input");
        if(getPassInput.type === "password"){
            getPassInput.type = "text";
            icon.classList.replace("fa-eye-slash", "fa-eye");
        }
        else{
            getPassInput.type = "password";
            icon.classList.replace("fa-eye", "fa-eye-slash");
        }
    })
});

rgstrBtn.addEventListener("click", (eve) => {
    eve.preventDefault();
    formContainer.classList.add("active");
});

loginBtn.addEventListener("click", (eve) => {
    eve.preventDefault();
    formContainer.classList.remove("active");
});

// Work Space codes for changing background and Font color 
function generateCard() {
    // Front of the card
    var frontCard = document.getElementById('businessFront');
    frontCard.style.backgroundColor = document.getElementById('bgColor').value;
    frontCard.style.color = document.getElementById('textColor').value;
    document.getElementById('frontCompanyName').innerText = document.getElementById('nameInput').value;
    document.getElementById('frontCompanyTagline').innerText = document.getElementById('companyInput').value;
    var logoInput = document.getElementById('logoInput');
    if (logoInput.files && logoInput.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById('logoFront').src = e.target.result;
      };
      reader.readAsDataURL(logoInput.files[0]);
      var frontCard = document.getElementById('businessFront');
      var frontBgColor = document.getElementById('bgColor').value;
  
      frontCard.style.backgroundColor = frontBgColor;
      var leftLine = document.querySelector('.leftLine');
    }
  
    // Back of the card
    var backCard = document.getElementById('businessBack');
    backCard.style.color = document.getElementById('bgColor').value; // Set text color to match front card background color
    document.getElementById('backCompanyName').innerText = document.getElementById('nameInput').value;
    document.getElementById('backCompanyTagline').innerText = document.getElementById('companyInput').value;
    document.getElementById('phoneNum').innerText = document.getElementById('phoneInput').value;
    document.getElementById('email').innerText = document.getElementById('emailInput').value;
    document.getElementById('companyPlace').innerText = document.getElementById('placeInput').value;

}
// Front of the card
function updateLeftLineColor() {
  var leftLine = document.querySelector('.leftLine');
  var frontBgColor = window.getComputedStyle(frontCard).backgroundColor;
  leftLine.style.backgroundColor = frontBgColor;
}
var frontCard = document.getElementById('businessFront');
var frontBgColor = document.getElementById('bgColor').value;

frontCard.style.backgroundColor = frontBgColor;

// JavaScript code to set background color for leftLine element
var frontCard = document.querySelector('.cardFront');



// Call the function to initially set the background color
updateLeftLineColor();

// To let the user download the back and front of the card
  function downloadBack() {
    html2canvas(document.getElementById('businessBack')).then(function(canvas) {
      var link = document.createElement('a');
      link.download = 'back-side-business-card.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  }

  function downloadFront() {
    html2canvas(document.getElementById('businessFront')).then(function(canvas) {
      var link = document.createElement('a');
      link.download = 'front-side-business-card.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  }

