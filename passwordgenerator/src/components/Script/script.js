import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function generate(){
    let lowercase = 'abcdefghijklmnoprstuvwxyz';
   let uppercase = "ABDCEFGHIJKLMNOPQRSTUVWXYZ";
   let numbers = "0123456789";
   let special = ")!@#$%^&*(";
   let generatedPassword = " "; 

}



var docPass = document.querySelector("#password");
var docGen = document.querySelector("#generate");

console.log(docGen);

// execute prompt when user clicks on generate button
docGen.addEventListener("click",function(){
     //  
     //
    var passlength = prompt("Choose a number of characters between 8 and 128.");

    if ((passlength > 7) && (passlength < 129)) {
    var confLower = confirm("Include lowercase letters?");
    var confUpper = confirm("Include uppercase letters?");
    var confNum = confirm("Include Numbers?");
    var confSpecial = confirm("Include special characters?");
    // 
    //
    // Define characters
   var lowercase = 'abcdefghijklmnoprstuvwxyz';
   var uppercase = "ABDCEFGHIJKLMNOPQRSTUVWXYZ";
   var numbers = "0123456789";
   var special = ")!@#$%^&*(";
   var generatedPassword = " ";
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
    var l = lowercase;
    var i = 0;
    var char = "";
    //
    //
    //loop
    if ((confLower === true) && (confUpper === true) && (confNum === true) && (confSpecial === true)) {
        for (i = 0; i < passlength; i++) {
            char = Math.floor(Math.random() * all.length);
            generatedPassword += all.charAt(char, char + 1);
        }
    } else if ((confLower === true) && (confUpper === true) && (confNum === true) && (confSpecial === false)) {
        for (i = 0; i < passlength; i++) {
            char = Math.floor(Math.random() * a.length);
            generatedPassword += a.charAt(char, char + 1);
        }
    } else if ((confLower === true) && (confUpper === true) && (confNum === false) && (confSpecial === true)) {
        for (i = 0; i < passlength; i++) {
            char = Math.floor(Math.random() * b.length);
            generatedPassword += b.charAt(char, char + 1);
        }
    }
    else if ((confLower === true) && (confUpper === false) && (confNum === true) && (confSpecial === true)) {
        for (i = 0; i < passlength; i++) {
            char = Math.floor(Math.random() * c.length);
            generatedPassword += c.charAt(char, char + 1);
        }
    }else if ((confLower === false) && (confUpper === true) && (confNum === true) && (confSpecial === true)) {
        for (i = 0; i < passlength; i++) {
            char = Math.floor(Math.random() * d.length);
            generatedPassword += d.charAt(char, char + 1);
        }
    } 
    else if ((confLower === false) && (confUpper === false) && (confNum === true) && (confSpecial === true)) {
        for (i = 0; i < passlength; i++) {
            char = Math.floor(Math.random() * e.length);
            generatedPassword += e.charAt(char, char + 1);
        }
    }
    else if ((confLower === true) && (confUpper === false) && (confNum === false) && (confSpecial === true)) {
        for (i = 0; i < passlength; i++) {
            char = Math.floor(Math.random() * f.length);
            generatedPassword += f.charAt(char, char + 1);
        }
    }
    else if ((confLower === false) && (confUpper === true) && (confNum === false) && (confSpecial === true)) {
        for (i = 0; i < passlength; i++) {
            char = Math.floor(Math.random() * g.length);
            generatedPassword += g.charAt(char, char + 1);
        }
    }
    else if ((confLower === true) && (confUpper === false) && (confNum === true) && (confSpecial === false)) {
        for (i = 0; i < passlength; i++) {
            char = Math.floor(Math.random() * h.length);
            generatedPassword += all.charAt(char, char + 1);
        }
    }
    else if ((confLower === false) && (confUpper === true) && (confNum === true) && (confSpecial === false)) {
        for (i = 0; i < passlength; i++) {
            char = Math.floor(Math.random() * j.length);
            generatedPassword += all.charAt(char, char + 1);
        }
    }
    else if ((confLower === true) && (confUpper === true) && (confNum === false) && (confSpecial === false)) {
        for (i = 0; i < passlength; i++) {
            char = Math.floor(Math.random() * k.length);
            generatedPassword += all.charAt(char, char + 1);
        }
    }
    else if ((confLower === true) && (confUpper === false) && (confNum === false) && (confSpecial === false)) {
        for (i = 0; i < passlength; i++) {
            char = Math.floor(Math.random() * l.length);
            generatedPassword += all.charAt(char, char + 1);
        }
    }
}
    //
    //
    //  
    docPass.textContent = generatedPassword;
});

function copy(){
    var copyText = document.querySelector("#password");
    copyText.select();
    document.execCommand("copy");
    alert("Copied Password");
    console.log(copyText);
};
