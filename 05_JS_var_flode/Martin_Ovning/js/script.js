/* 
Math.pow();
Math.random();
 */

/* 
console.log("--------------------------------");

console.log(Math.random());
console.log("\n");
console.log(Math.round(1.687));

console.log("--------------------------------");

// Date and Time
let currentDate = new Date();
console.log(currentDate);

console.log(currentDate.getFullYear());
 */
/* 
console.log("--------------------------------");

// Strängar

// console.log(stringNumber.toString());

let stringNumber = 5;
let convertNumber;

if (Number.isInteger(stringNumber)) {
    convertNumber = stringNumber.toString();
}
console.log(convertNumber);




console.log("--------------------------------");

// fornamn.concat('', efternamn);

console.log("HELLO".toLowerCase());

let text = "HELLO";
console.log("Start string: " + text);

let textToLowerCase = text.toLowerCase();
console.log("Start string toLowerCase: " + textToLowerCase);

let textToUpperCase = textToLowerCase.toUpperCase();
console.log("Start string to UpperCase: " + textToUpperCase);


let strang = "JavaScript är sämst";

console.log(strang.substring(0, 4));
console.log(strang.slice(4));

console.log(strang.indexOf("är")); 
console.log(strang.includes("är")); 

console.log("-------------------------------");

let badInputText = "   hello   ";
console.log("bad text; "+ badInputText);
let trimedText = badInputText.trim();
console.log("Trimed Text; "+ trimedText);


console.log("-------------------------------");
console.log("-------------------------------");


let userData = "Bob, Rob ,  Zob";
let userDataSplit = userData.split(",");
console.log(userData);
for (let i = 0; i < userDataSplit.length; i++) {
    userDataSplit[i] = userDataSplit[i].trim();
}
console.log(userDataSplit);

let userDataJoin = userDataSplit.join(", ");
console.log("Joining user data split with ', ' ");
console.log(userDataJoin);


console.log("-------------------------------");

let message = "Hej John";
let newMessage = message.replace("John", "Johnny");
console.log(newMessage);
 */

/* 
console.log("-------------------------------");

let txt1 = " Skärmskydd , 499";

let txt2 = "Mobiltelefon, 299, ";

let txt3 = " Telefonfodral, 89, ";

let txt4 = " Laptop, 799";

let txt5 = " Hörlurar , 199 ";

// Dela upp sträng och extrahera varje produkt

let txt1Product = txt1.substring(1, 12);
let txt1Price = txt1.substring(13, 16);

console.log("txt1Product: " +  txt1Product);
console.log("txt1Price: " +   txt1Price);

let txt1Split = txt1.split(",");
console.log(txt1Split);

for (let i = 0; i < txt1Split.length; i++) {
    txt1Split[i] = txt1Split[i].trim();
    
}

console.log(txt1Split);
 */

/* 
console.log("--------------------------------");

myName(); 
saySomething("Hello World");


function myName() {
    let name = "Martin";
    console.log(name);
}

function saySomething(txt) {
    let newTxt = "User said that " + txt
    console.log(newTxt);
    return newTxt;
}
 */

console.log("-------------------------------");




writeName("Martin");
console.log(area(10, 5)); 


function writeName(name) {
    console.log(name);
}

function area(width, height) {
    let area = width * height
    return area;
}

let var1 = "variable in ouer script";
let var4;

function func() {
    let var2 = "variable in function scope";

    if (true) {
        let var3 = "variable in if statement scope";
        var4 = "variable initialised in if statement scope";        
        console.log(var1);
    }
}

func();
