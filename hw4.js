/*
Program name: Patient-form.html
Name: Matt Dsouza
Data created: Febuary 4, 2025
Data last edited: April 6, 2025
Version: 1.0
Description: Homework 3 Patient Form
*/
// Dynamic Date
document.getElementById("today").innerHTML = new Date().toLocaleDateString();

// Range slider code
let slider = document.getElementById("medRange");
let output = document.getElementById("rangeBar");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
};

//First name validation Function
function validateFname(){
  let fname = document.getElementById("f-name").value.trim();
  const fnamePattern = /^[a-zA-Z'-]+$/;
  const fnameError = document.getElementById("f-name-error");

  if (fname === ""){
    fnameError.innerHTML = "Required"
    return false;
  }
  if (fname.length < 2) {
    fnameError.innerHTML = "Too short. First name must be at least 2 characters.";
    return false;
  }
  if (fname.length > 30) {
    fnameError.innerHTML = "Too long. First name must be no more than 30 characters.";
    return false;
  }
  if (!fname.match(fnamePattern)) {
    fnameError.innerHTML = "Letters, apostrophes, and dashes only.";
    return false;
  }
  fnameError.innerHTML = "";
  return true;
}

// Middle initial Validation Function
function validateMI() {
  let middleInitial = document.getElementById("m-initial").value.trim();
  const miPattern = /^[A-Z]$/;

  // If field is empty (optional), skip validation
  if (middleInitial === "") {
    document.getElementById("m-initial-error").innerHTML = "";
    return true;
  }

  middleInitial = middleInitial.toUpperCase();
  document.getElementById("m-initial").value = middleInitial;

  if (!middleInitial.match(miPattern)) {
    document.getElementById("m-initial-error").innerHTML = "1 letter only";
    return false;
  } else {
    document.getElementById("m-initial-error").innerHTML = "";
    return true;
  }
}
// last name Validation Function
function validateLname(){
  let lname = document.getElementById("l-name").value.trim();
  const lnamePattern = /^[a-zA-Z'-]+$/;
  const lnameError = document.getElementById("l-name-error");

  if (lname === ""){
    lnameError.innerHTML = "Required"
    return false;
  }
  if (lname.length < 2) {
    lnameError.innerHTML = "Too short. Last name must be at least 2 characters.";
    return false;
  }

  if (lname.length > 30) {
    lnameError.innerHTML = "Too long. Last name must be no more than 30 characters.";
    return false;
  }

  if (!lname.match(lnamePattern)) {
    lnameError.innerHTML = "Letters, apostrophes, and dashes only.";
    return false;
  }

  lnameError.innerHTML = "";
  return true;
}

// DOB Validation Function
function validateDob() {
  let dob = document.getElementById("dob"); // calls dob id from html
  let date = new Date(dob.value);
  let maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 120);

  if (date > new Date()) {
    document.getElementById("dob-error").innerHTML = "This entered date cannot be in the future.";
    dob.value = "";
    return false;
  } else if (date < maxDate) {
    document.getElementById("dob-error").innerHTML = "Date cannot be more than 120 years ago.";
    dob.value = "";
    return false;
  } else {
    document.getElementById("dob-error").innerHTML = "";
    return true;
  }
}

function validateSSN(){
  const ssn = document.getElementById("ssn").value;
  const ssnRegrex = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

  if (!ssnRegrex.test(ssn)){
    document.getElementById("ssn-error").innerHTML= "Please enter a valid SSN number."
    return false;
  } else {
    document.getElementById("ssn-error").innerHTML="";
    return true;
  }
}

function validateAddressline1(){
  var address1 = document.getElementById("address1").value;
  console.log(address1);
  console.log(address1.length);

  if (address1.length<2){
    document.getElementById("address1-error").innerHTML="Too short, Please enter a valid Address.";
    return false;
  } else {
    document.getElementById("address1-error").innerHTML="";
    return true;
  }
}

function validatePhone() {
  const userPhoneNumber = document.getElementById("phone");
  const originalInput = userPhoneNumber.value.trim();
  const phoneNum = originalInput.replace(/\D/g, ""); // Strip all non-numeric characters

  if (phoneNum.length !== 10) {
    document.getElementById("phone-error").innerHTML = "Required. Please enter a valid 10-digit phone number.";
    return false;
  }

  // Format as 123-456-7890
  const phoneNumberFormat = phoneNum.slice(0, 3) + "-" + phoneNum.slice(3, 6) + "-" + phoneNum.slice(6);
  userPhoneNumber.value = phoneNumberFormat;
  document.getElementById("phone-error").innerHTML = "";
  return true;
}


//validate city function
function validateCity(){
  city = document.getElementById("city").value.trim();

  if (!city){
    document.getElementById("city-error").innerHTML = "Required"
    return false;
  } else {
    document.getElementById("city-error").innerHTML = "";
    return true;
  }
}


function validateZipcode() {
  const userZipNum = document.getElementById("zipcode"); // Corrected ID reference
  let zipCode = userZipNum.value.replace(/[^\d-]/g, ""); // Remove non-digit & non-hyphen characters

  if (!zipCode) {
    document.getElementById("zipcode-error").innerHTML = " Please enter a valid Zip code.";
    return false;
  }

  if (zipCode.length > 5) {
    zipCode = zipCode.slice(0, 5); // Limit to 5 characters
  }

  userZipNum.value = zipCode; // Corrected value assignment
  document.getElementById("zipcode-error").innerHTML = ""; // Clear error message
  return true;
}
function validateEmailAddress() {
  let userEmail = document.getElementById("emailaddress").value.trim(); // Trim to remove spaces
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Corrected variable name

  if (userEmail === "") {
    document.getElementById("emailaddress-error").innerHTML = " This field cannot be blank.";
    return false;
  } else if (!userEmail.match(emailRegex)) {
    document.getElementById("emailaddress-error").innerHTML = "Please enter a valid email address.";
    return false;
  } else {
    document.getElementById("emailaddress-error").innerHTML = "";
    return true;
  }
}
function validateUserID() {
  let userID = document.getElementById("userID").value.trim(); // Trim spaces

  userID = userID.toLowerCase(); // Converts to lowercase
  document.getElementById("userID").value = userID; // Update input field

  if (userID.length === 0) {
    document.getElementById("userID-error").innerHTML = "User ID field cannot be empty.";
    return false;
  }

  // Check if the first character is a number
  if (!isNaN(userID.charAt(0))) {
    document.getElementById("userID-error").innerHTML = "User ID cannot start with a number.";
    return false;
  }

  // Allow only letters, numbers, and underscores
  let userRegex = /^[a-zA-Z0-9_]+$/;
  if (!userRegex.test(userID)) {  // FIXED: Now correctly checking for invalid input
    document.getElementById("userID-error").innerHTML = "User ID must only contain letters, numbers, and underscores.";
    return false;
  }

  // Length validation
  if (userID.length < 5) {
    document.getElementById("userID-error").innerHTML = "User ID must be at least 5 characters.";
    return false;
  } else if (userID.length > 30) {
    document.getElementById("userID-error").innerHTML = "User ID cannot be more than 30 characters.";
    return false;
  }

  // If everything is correct, clear error and return true
  document.getElementById("userID-error").innerHTML = "";
  return true;
}

function validatePassword(){
  const password = document.getElementById("password").value;
  const userID = document.getElementById("userID").value;

  const errorMessage = [];

  if (!password.match(/[a-z]/)){
    errorMessage.push("Enter at least one lowercase letter.");
  }

  if (!password.match(/[A-Z]/)){
    errorMessage.push("Enter at least one Uppercase letter.");
  }

  if (!password.match(/[0-9]/)){
    errorMessage.push("Enter at least one number.");
  }

  if (!password.match(/[!@#$%&*\-_.+()]/)) {
    errorMessage.push("Enter at least one special character");
  }

  if (password == userID || password.includes(userID)){
    errorMessage.push("Password cannot contain UserID.");
  }

  const pErrorContainer = document.querySelector(".password-message");
  pErrorContainer.innerHTML = errorMessage
    .map(message => `<span>${message}</span><br/>`)
    .join("");

  return errorMessage.length === 0;

}

function validateEnterpass(){
  password1= document.getElementById("password").value;
  password2= document.getElementById("re-enterPass").value;

  if (password1 != password2){
    document.getElementById("password2-error").innerHTML= "Passwords do not match.";
    return false;
  } else {
    document.getElementById("password2-error").innerHTML= "Passwords match! ";
    return true;
  }
}

function reviewInput() {
  // Get the form content by ID 'review-button'
  var formcontent = document.getElementById("review-button");

  // Initialize a variable to store the HTML table structure for displaying the form content
  var formoutput = "<table class='output'><th colspan = '3'> Please Review Your Information:</th>";

  // Loop through each form element
  for (let i = 0; i < formcontent.length; i++) {
    // Check if the element has a value (it's not empty)
    if (formcontent.elements[i].value !== "") {
      // Switch based on the element type (checkbox, radio, or others)
      switch (formcontent.elements[i].type) {
        case "checkbox":
          // If it's a checkbox and it is checked, add the checkbox to the output table
          if (formcontent.elements[i].checked) {
            formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>&#x2713;</td></tr>`;
          }
          break;
        case "radio":
          // If it's a radio button and it's selected, add the radio choice to the output table
          if (formcontent.elements[i].checked) {
            formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
          }
          break;
        default:
          formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
      }
    }
  }

  // Close the table tag after all the form content is added
  formoutput += "</table>";

  // Insert the generated table into the HTML element with ID 'showInput'
  document.getElementById("showInput").innerHTML = formoutput;
}


function removeReview(){
  document.getElementById("showInput").innerHTML="";
}

//alert box function
function showAlert(){
  var alertBox = document.getElementById("alert-box");
  var closeAlert = document.getElementById("close-alert");

  alertBox.style.display = "block";
  closeAlert.onclick = function() {
    alertBox.style.display = "none";
  };
}

//alert box validation everything on form
function validateData(){
  let valid = true;

  if (!validateFname()){
    valid = false;
  }
  if (!validateMI()){
    valid = false;
  }
  if (!validateLname()){
    valid = false;
  }
  if (!validateDob()){
    valid = false;
  }
  if (!validateSSN()){
    valid = false;
  }
  if (!validateAddressline1()){
    valid = false;
  }
  if (!validatePhone()){
    valid = false;
  }
  if (!validateCity()){
    valid = false;
  }
  if (!validateZipcode()){
    valid = false;
  }
  if (!validateEmailAddress()){
    valid = false;
  }
  if (!validateUserID()){
    valid = false;
  }
  if (!validatePassword()){
    valid = false;
  }
  if (!validateEnterpass()){
    valid = false;
  }
  if (valid){
    document.getElementById("submitButton").disabled = false;
  } else {
    showAlert();
  }
}

function setCookie(name, cvalue, expiryDays) {
  var day = new Date();  // Fix: new Date(), not new date()
  day.setTime(day.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + day.toUTCString();
  document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(name) {
  var cookieName = name + "=";
  var cookies = document.cookie.split(';');

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) == 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return "";
}

var inputs = [
  { id: "f-name", cookieName: "firstName" },
  { id: "m-initial", cookieName: "middleInitial" },
  { id: "l-name", cookieName: "lastName" },
  { id: "dob", cookieName: "dob" },
  { id: "ssn", cookieName: "ssn" },
  { id: "address1", cookieName: "addressline1" },
  { id: "phone", cookieName: "phoneNumber" },
  { id: "city", cookieName: "city" },
  { id: "zipcode", cookieName: "zipCode" },
  { id: "emailaddress", cookieName: "emailID" },
  { id: "userID", cookieName: "userID" }
];

// Handle the "Remember Me" checkbox
function handleRememberMe() {
  var rememberMeChecked = document.getElementById("rememberMe").checked;
  setCookie("rememberMe", rememberMeChecked ? "true" : "false", 30); // Store the checkbox state

  if (rememberMeChecked) {
    // Save cookies with a 30-day expiry if checked
    inputs.forEach(function(input) {
      var inputElement = document.getElementById(input.id);
      setCookie(input.cookieName, inputElement.value, 30);
    });
  } else {
    // Expire cookies if unchecked
    inputs.forEach(function(input) {
      setCookie(input.cookieName, "", -1);
    });
  }
}

// Check if the "Remember Me" checkbox was previously checked
window.onload = function() {
  var rememberMeChecked = getCookie("rememberMe") === "true"; // Check the "rememberMe" cookie
  document.getElementById("rememberMe").checked = rememberMeChecked; // Set the checkbox state based on the cookie

  if (rememberMeChecked) {
    // If checked, restore form data
    inputs.forEach(function(input) {
      var inputElement = document.getElementById(input.id);
      var cookieValue = getCookie(input.cookieName);
      if (cookieValue !== "") {
        inputElement.value = cookieValue;
      }
    });
  }
};

// Store the "Remember Me" checkbox state when changed
document.getElementById("rememberMe").addEventListener("change", function() {
  handleRememberMe();  // Save or expire cookies when the checkbox state changes
});

// Check if it's the user's first visit
// Check if it's the user's first visit
var firstVisit = getCookie("firstVisit");
console.log("firstVisit cookie:", firstVisit);  // Debugging line to check cookie value

if (firstVisit === "") {
  // This is the first visit
  document.getElementById("welcome1").innerHTML = "Hello New User!";
  setCookie("firstVisit", "true", 48);  // Set a cookie to track the first visit
} else {
  // This is not the first visit
  var firstName = getCookie("firstName");
  if (firstName !== "") {
    document.getElementById("welcome1").innerHTML = "Welcome Back, " + firstName + "! </br>";
    document.getElementById("welcome2").innerHTML =
    "<a href='#' id='new-user'>Not " + firstName + "? Click here to start a new form </a>";

    document.getElementById("new-user").addEventListener("click", function() {
      // Reset form and expire cookies
      inputs.forEach(function(input) {
        setCookie(input.cookieName, "", -1);
      });
      setCookie("rememberMe", "false", -1); // Expire rememberMe cookie
      location.reload(); // Reload the page to reset everything
    });
  }
}
