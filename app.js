// Changing Case 

// var a = prompt("Enter Your Name");
// a = a.toUpperCase();
// document.write(a);

// var a = prompt("Enter Your Name");
// var firstCharacter = a.slice(0,1);
// var otherCharacter = a.slice(1);
// firstCharacter = firstCharacter.toUpperCase();
// otherCharacter = otherCharacter.toLowerCase();
// var a = firstCharacter + otherCharacter;
// document.write(a);

// Strings: measuring length and extracting parts

// var str = prompt("Enter Your Favourite Phone Model");
// var numChar = str.length;
// document.write(numChar);

// var str = prompt("Enter Your Name");
// var lastChar = str.slice(-1);
// document.write(lastChar);

// Strings: finding segments

// var country = "Pakistan";
// for(var i = 0; i < country.length; i++){
//     if(country[i] === "n"){
//         document.write("The index of n is: " + i)
//     }
// }

// Strings: finding a character at a location

// var country = "Pakistan";
// document.write(country.charAt(3));

// Strings: replacing characters

// var city = "Hyderabad";
// var cityChange = city.replace("Hyder", "Islam");
// document.write(city + " change into " + cityChange);

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var messageChange = message.replace(/and/g, "&");
// document.write(messageChange);

// var aNum = +prompt("Enter a positive integer");
// // var roundNum = Math.round(aNum);
// // document.write(roundNum);
// var ceilNum = Math.ceil(aNum);
// document.write(ceilNum);
// var floorNum = Math.floor(aNum);
// document.write(floorNum);

// var aNum = +prompt("Enter a negative floating point number");
// var roundNum = Math.round(aNum);
// document.write(roundNum);
// var ceilNum = Math.ceil(aNum);
// document.write(ceilNum);
// var floorNum = Math.floor(aNum);
// document.write(floorNum);

// Generating random numbers

// var diceValue = Math.random();
// document.write(diceValue);

// var toss = Math.random()*2;
// var tossFloor = Math.floor(toss);
// if(tossFloor === 1){
//     document.write("<h1>Heads</h>");
// }
// else{
//     document.write("<h1>Tails</h1>");
// }

// var guessNum = Math.random()*10;
// var guessNumCeil = Math.ceil(guessNum);
// var guessUserNum = prompt("Enter a number from 1 to 10")
// if(guessUserNum == guessNumCeil){
//     document.write("Congratulations");
// }
// else{
//     document.write("Try Again");
// }

// Converting strings to integers and decimals

// var weight = prompt("Enter your weight");
// var weightA = parseInt(weight);
// document.write(weightA + "<br />");
// var weightB = parseInt(weight) + "kgs";
// document.write(weightB + "<br />");
// var weightC = parseFloat(weight) + "kgs";
// document.write(weightC + "<br />");
// var weightD = parseFloat(weight) + "kilograms";
// document.write(weightD);

// Converting strings to numbers, numbers to strings

// var str = "421";
// var num = Number(str);
// document.write(num + "<br />" + typeof num);

// var num = 35.36;
// var str = num.toString();
// document.write(str);

// Controlling the length of decimals

// var percentage = 30 / 45 * 100;
// var decimal = percentage.toFixed(2);
// document.write(decimal);

// Completed