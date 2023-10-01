// Assignment Code
var generateBtn = document.querySelector("#generate");

// Placeholders for all different options that can be included in the password
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialChar = "!#%$&'()*+,-./:;<=>?@[]^_`{|}~";

var passLength = "";
var passOptions = "";

// Function to randomly select an index from an array
function getRandom(array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index];
}

// Determines the password length
function passwordLength() {
  passLength = prompt("How long would you like your password to be? (8-128)");
  if (passLength === null) {
    return;
  }
  passLength = passLength * 1;
  if (passLength < 8 || passLength > 128) {
    alert("Please enter a valid password length.");
    passwordLength();
  }
  else if (Number.isNaN(passLength)) {
    alert("Please enter a number.");
    passwordLength();
  }
  return passLength;
}


// Asks users what kind of characters to include in their password
function addCharacters() {
  // Empty variable that will be populated as the user decides what to include in their password
  passOptions = "";
  var addLower = confirm("Would you like to include lower case letters in your password?");
  if (addLower) {
    passOptions += lowerCase;
  }
  var addUpper = confirm("Would you like to include upper case letters in your password?");
  if (addUpper) {
    passOptions += upperCase;
  }
  var addNumbers = confirm("Would you like to include numbers in your password?");
  if (addNumbers) {
    passOptions += numbers;
  }
  var addSpecials = confirm("Would you like to include special characters in your password?");
  if (addSpecials) {
    passOptions += specialChar;
  }

  if (passOptions === "") {
    alert("Please select at least one option.")
    addCharacters();
  }
}

// Randomly selects the characters and adds them to the password
function selectChars() {
  passOptions.split("");
  var tempPassword = "";
  for (i = 0; i < passLength; i++) {
    tempPassword += getRandom(passOptions);
  }
  return tempPassword;
}

// Generates the password
function generatePassword() {
  passwordLength();
  if (passLength === null) {
    return;
  }    
  addCharacters();
  var password = selectChars();
  return password;
  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (passLength !== null) {
    passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
