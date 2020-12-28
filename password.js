// Declare Variables from html
var docPass = document.querySelector("#password");
var docGen = document.querySelector("#generate");
var docCop = document.querySelector("#copy");

// Define characters
   var lowercase ='abcdefghijklmnopqrstuvwxyz';
   var uppercase = "ABDCEFGHIJKLMNOPQRSTUVWXYZ";
   var numbers = "0123456789";
   var special = "!@#$%^&*()";
   var generatedPassword = " ";

// execute prompt when user clicks on generate button
docGen.addEventListener("click", function() {
     //  
     //
var passlength = prompt("Choose a number of characters between 8 and 128.");

if ((passlength > 7) && (passlength < 129)) {
    let confLower = confirm("Include lowercase letters?");
    let confUpper = confirm("Include uppercase letters?");
    let confNum = confirm("Include Numbers?");
    let confSpecial = confirm("Include special characters?");
    // 
    //
    // Declare variables for password generation
    var all = uppercase + lowercase + numbers + special;
    var a = uppercase + lowercase + numbers;
    var b = uppercase + lowercase + special;
    var c = lowercase + numbers + special;
    var d = special + numbers + uppercase;
    var e = special + numbers;
    var f = special + lowercase;
    var g = special + uppercase;
    var h = numbers + lowercase;
    var j = numbers + uppercase;
    var k = lowercase + uppercase;
    var i = 0;
    //
    //
    //loop
    if ((confLower === true) && (confUpper === true) && (confNum === true) && (confSpecial === true)) {
        for (i = 0; i < passlength; i++) {
            let char = Math.floor(Math.random() * all.length);
            newPassword += all.charAt(char, char + 1);
        }
    }
    else if ((confLower === true) && (confUpper === true) && (confNum === true) && (confSpecial === false)) {
        for (i = 0; i < passlength; i++) {
            let char = Math.floor(Math.random() * a.length);
            newPassword += all.charAt(char, char + 1);
        }
    }
    else if ((confLower === true) && (confUpper === true) && (confNum === false) && (confSpecial === true)) {
        for (i = 0; i < passlength; i++) {
            let char = Math.floor(Math.random() * b.length);
            newPassword += all.charAt(char, char + 1);
        }
    }
    else if ((confLower === true) && (confUpper === false) && (confNum === true) && (confSpecial === true)) {
        for (i = 0; i < passlength; i++) {
            let char = Math.floor(Math.random() * c.length);
            newPassword += all.charAt(char, char + 1);
        }
    }
    else if ((confLower === false) && (confUpper === true) && (confNum === true) && (confSpecial === true)) {
        for (i = 0; i < passlength; i++) {
            let char = Math.floor(Math.random() * d.length);
            newPassword += all.charAt(char, char + 1);
        }
    }
    else if ((confLower === false) && (confUpper === false) && (confNum === true) && (confSpecial === true)) {
        for (i = 0; i < passlength; i++) {
            let char = Math.floor(Math.random() * e.length);
            newPassword += all.charAt(char, char + 1);
        }
    }
    else if ((confLower === true) && (confUpper === false) && (confNum === false) && (confSpecial === true)) {
        for (i = 0; i < passlength; i++) {
            let char = Math.floor(Math.random() * f.length);
            newPassword += all.charAt(char, char + 1);
        }
    }
    else if ((confLower === false) && (confUpper === true) && (confNum === false) && (confSpecial === true)) {
        for (i = 0; i < passlength; i++) {
            let char = Math.floor(Math.random() * g.length);
            newPassword += all.charAt(char, char + 1);
        }
    }
    else if ((confLower === true) && (confUpper === false) && (confNum === true) && (confSpecial === false)) {
        for (i = 0; i < passlength; i++) {
            let char = Math.floor(Math.random() * h.length);
            newPassword += all.charAt(char, char + 1);
        }
    }
    else if ((confLower === false) && (confUpper === true) && (confNum === true) && (confSpecial === false)) {
        for (i = 0; i < passlength; i++) {
            let char = Math.floor(Math.random() * j.length);
            newPassword += all.charAt(char, char + 1);
        }
    }
    else if ((confLower === true) && (confUpper === true) && (confNum === false) && (confSpecial === false)) {
        for (i = 0; i < passlength; i++) {
            let char = Math.floor(Math.random() * k.length);
            newPassword += all.charAt(char, char + 1);
        }
    }
    //
    //
    //
    docPass.textContent = generatePswrd;
}});