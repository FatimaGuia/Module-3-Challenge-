document.getElementById("generate").addEventListener("click" , generatePassword);

function generatePassword() {
    var length = prompt("Enter the length of the password (8-128 characters):");
    if (length < 8 || length > 128 || is NaN(length)) {
        alert("Invalid length. Please emeter a number betwee 8 and 128."); 
        return; 
    }

    var includeLowercase = confirm("Include lowercase characters?");
    var includeUppercase = confirm("Include uppercase characters?");
    var includeNumber = confirm("Include numbers?");
    var includeSpecialChars = confirm("Include special characters?");


if (!includeLowercase && !includeUppercase && !includeNumbers && !inlcudeSpecialChars) {
    alert("You must select at least one charcater type.")
    returen;
}


var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChars = "0123456789"; 
var specialChars = "!@#$%^&*()_-+=";
var allChars = "";


if (includeLowercase) {
    allChars += lowercaseChars;
}
if (includeUppercase) {
    allChars += uppercaseChars;
}
if (includeNumbers) {
    allChars += numberChars;
}
if (includeSpecailChars) {
    allChars += specialChars;
}

var password = "";
for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math, random() * allChars.length);
    password += allChars.charAt(randomIndex);

}
document.getElementById("password").textContent = password;
}
