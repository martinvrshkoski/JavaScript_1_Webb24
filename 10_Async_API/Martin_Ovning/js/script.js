function writeName(myName) {
console.log(myName);
return myName;
}

function calculateArea(width, height) {
    let area = width * height
    console.log(area);
    return area;
}

function calculateSum(num1, num2) {
    let sum = num1 + num2
    console.log(sum);
    return sum;   
}

function celToFahr(celcius) {
    let convertCel = (celcius * 9/5) + 32;
    console.log(convertCel);
}



writeName("Martin");
calculateArea(3, 4);
calculateSum(4, 6);
celToFahr(23);
console.log("----------------------------------------------");


let createRandomList = (listLength, maxValue) => {
    let outList = [];
    for (let i = 0; i < listLength; i++) {
        let rand = Math.floor()*maxValue;
        outList.push(rand);
    }
    return outList;
}

console.log(createRandomList(10, 25));