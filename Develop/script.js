var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numCharacter = "0123456789"
var specialCharacter = "!@#$%^&*()-_=+][{}|<.>/?~`"

function selectOptions() {
  var passwordOptionsCheck = true
  var selectedChars = ""
  var passwordLength = window.prompt("How long would you like your password? Choose a number between 8 and 128.")
  if (passwordLength < 8 || passwordLength > 128) {
    alert("You did not pick a correct number.");
    return;
  }
  var confirmLower = confirm("Do you want lowercase letters in this password?")

  if (confirmLower) {
    selectedChars = selectedChars + lowerCase;
    passwordOptionsCheck = false; 
  }
  var confirmUpper = confirm("Do you want uppercase letters in this password? ")

  if (confirmUpper) {
    selectedChars = selectedChars + upperCase;
    passwordOptionsCheck = false; 
  }
  var confirmNum = confirm("Do you want numbers in this password?")

  if (confirmNum) {
    selectedChars = selectedChars + numCharacter;
    passwordOptionsCheck = false; 
  }
  var confirmSpec = confirm("Do you want special characters in this password?")

  if (confirmSpec) {
    selectedChars = selectedChars + specialCharacter;
    passwordOptionsCheck = false;
  }

  if (passwordOptionsCheck) {
    alert("You did not choose any options.");
    return;
  }
  generate(passwordLength, selectedChars);
}

function generate(length, chars) {
  var finalPassword = ""
  for (var i = 0, n = chars.length; i < length; i++) {
   finalPassword += chars.charAt(Math.floor(Math.random() * n));
  }
  writePassword(finalPassword)
}

generateBtn.addEventListener("click", selectOptions);

function writePassword(password) {
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
