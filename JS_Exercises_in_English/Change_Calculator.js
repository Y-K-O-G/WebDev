/*First part of what I plan to be a self checkout which tells the user everything he is buying, the total value and change.
This first version processes only amounts of the same product, but future version will use array to storage the value of various products
and will have a "cancel purchase" option.*/

function buy() {

    let priceOfProduct = parseFloat(prompt("What is the price of the product you are buying?"))
    let price = priceOfProduct + 0;
  
    if(isNaN(price)) {
        alert("The price must be a number.");
        return buy();
    } else {
        return price;
    }
    
}

function howMany() {

    let productCount = parseFloat(prompt("How many of this product are you buying?"))
    let count = productCount + 0;
  
    if(isNaN(count)) {
        alert("The product count must be a number.");
        return howMany();
    } else {
        return count;
    }
    
}

function payment() {

    let money = parseFloat(prompt("How much money are you using to pay?"))
    let moneyUsed = money + 0;
    
    if(isNaN(moneyUsed)) {
        alert("The money value must be a number.");
        return payment();
    } else if(moneyUsed < productTotal) {
        alert("This is not enough to pay for this product.");
        return payment();
    } else {
        return moneyUsed;
    }
  
}

var buy = buy();

var howMany = howMany();

var productTotal = buy * howMany;

var payment = payment();
    
var change = payment - productTotal;

function market() {
    alert("Your change is "+ (Math.round(change * 100) / 100) + " dolars.");
}

market();
