// Assignment Code
var generateBtn = document.querySelector("#generate");

// Empty variable that will be populated as the user decides what to include in their password
var passOptions = "";

// Placeholders for all different options that can be included in the password
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialChar = " !#%$&'()*+,-./:;<=>?@[\]^_`{|}~";

// Determines the password length
function passwordLength() {
  var passLength = prompt("How long would you like your password to be? (8-20)");
  passLength = passLength * 1;
  console.log(typeof passLength);
  if (passLength < 8 || passLength > 20) {
    alert("Please enter a valid password length.");
    passwordLength();
  }
  else if (Number.isNaN(passLength)) {
    alert("Please enter a number.");
    passwordLength();
  }
}

// Generates the password
function generatePassword() {
  passwordLength();

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
