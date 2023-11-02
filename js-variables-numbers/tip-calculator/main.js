console.log("hi");
let totalCost;
let mealPrice;
let tipPercentage;

tipPercentage = 10;
mealPrice = 15;

tipAmount = mealPrice * (tipPercentage / 100);
totalCost = tipAmount + mealPrice;
console.log(`The total cost of your bill is: ${totalCost}`);
