// Assignment Code
var finalP = [];
var cH = ["*", "$", "@", "#", ":", "&", "?", "!", ".", "+", "?", "-", "^"];
var uC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var n = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//variables arrays for all possible combo of passwords
function generatePassword() {

    numberOfCharacters = prompt("How many characters do you want your password to contain? You are allowed a minimum of 8 and a maximum of 128 characters.");
    //pop up once button is clicked.
    if (numberOfCharacters < 8 || numberOfCharacters > 128) {
        return "invalid input of characters. Try agaim";
    } else {
        alert("Congrats, your password will contain " + numberOfCharacters + " characters. ");

    }
    if (numberOfCharacters >= 8 || numberOfCharacters <= 128)

    {

        uppercase = confirm("Do you want to contain uppercase letter?");

        numbers = confirm("Do you want to contain numbers?");

        lowercase = confirm("Do you want to contain lowercase letters?");

        special = confirm("Do you want to contain special characters?");
        //confirms the character type
    }
    if (numbers === false && special === false && uppercase === false && lowercase === false) {

        return " Choose at least one character type.";
    }



    if (numbers, uppercase, lowercase, special) {
        finalP = finalP.concat(n);
        finalP = finalP.concat(cH);
        finalP = finalP.concat(uC);
        finalP = finalP.concat(lowC);
        //this creates new arrays
    }


    let pass = " "
    for (let i = 0; i < numberOfCharacters; i++) {
        let rng = [Math.floor(Math.random() * finalP.length)];
        pass = pass + finalP[rng];
    }
    //chooses a random password 
    return pass;







};





var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);