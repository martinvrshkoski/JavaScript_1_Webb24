/* console.log("-------------------------------");

// Function to add food dishes with counter++
function addDish(dish, counter) {
    if (counter[dish]) {
        counter[dish]++;
    } else {
        counter[dish] = 1;
    }
    console.log(dish + " has been added to the list" + "\n");
    
}

// Function to count the number of dishes
function countDishes(counter) {
    let totalCount = 0;
    for (let dish in counter) {
        totalCount += counter[dish];
    }
    return totalCount;
}

// Function to show added dishes
function showAddedDishes(counter) {
    console.log("Added Dishes:");
    for (let dish in counter) {
        console.log(`${dish}: ${counter[dish]}`);
    }
}


// Example usage
let dishCounter = {};

addDish("Pizza", dishCounter);
addDish("Burger", dishCounter);
addDish("Pizza", dishCounter);
addDish("Sushi", dishCounter);
addDish("Kebab", dishCounter);
addDish("Kebab", dishCounter);


console.log("Total number of dishes:", countDishes(dishCounter));

showAddedDishes(dishCounter);
 */

console.log("-------------------------------");


let counter = 0;

function addDish() {
    counter++;
    console.log("Dish added");
}

function dishCounter() {
    console.log(counter);
}

function showDishes() {
    for (let i = 0; i < counter; i++) {
        console.log(`${i} maträtt`);
    }
}

addDish();
addDish();
addDish();
addDish();
dishCounter();
addDish();
showDishes();