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



console.log("-------------------------------");