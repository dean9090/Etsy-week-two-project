// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  var sum = 0;
  for (var i = 0; i < data.length; i++) {      // itterating through the data array
    sum += data[i].price;                     // starting sum at zero and adding price to it everytime
  }

    let total = sum / data.length;            // using the math to make average
    console.log(Math.round(total * 100) /100);// ROUNDING UP TO NEAREST HUNDRETH
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  let prices = [];                                        // STARTING OUT WITH EMPTY ARRAY
  for (var i = 0; i < data.length; i++) {                 // ITTERATING THROUGH DATA
    if (data[i].price >= 14 && data[i].price <= 18) {     // IF PRICE IS BETWEEN 14 AND 18
      prices.push(data[i].title);                         // GRAB THE TITLE OF ITEM
    }
  }
  console.log(prices);                                    // CONSOLE LOG ALL OF THE  NAMES OF ITEMS BETWEEN $14 AND $18 
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
}
