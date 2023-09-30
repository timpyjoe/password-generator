// Assignment Code
var generateBtn = document.querySelector("#generate");

// Empty array that will be populated as the user decides what to include in their password
var passOptions = [];

// Placeholders for all different options that can be included in the password
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialChar = " !#%$&'()*+,-./:;<=>?@[\]^_`{|}~";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generates the password
function generatePassword() {
  var passLength = prompt("How long would you like your password to be? (8-20)");
  passLength = passLength * 1;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
