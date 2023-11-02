// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// var for characters (upper,lower,special, numbers)
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numCharacter = "0123456789"
var specialCharacter = "!@#$%^&*()-_=+][{}|<.>/?~`"
// character length 8 to 128
// browser alert prompts 
// validated inputs from prompts

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword(password) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
