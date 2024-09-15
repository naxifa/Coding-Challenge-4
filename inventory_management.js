
// Task 1 - Creating an Inventory Array of Product Objects 

let inventory = [
{ name: "Laptop", price: 500, quantity: 47, lowStockLevel: 5 },
{ name: "Smartphone", price: 400, quantity: 96, lowStockLevel: 8 },
{ name: "Tablet", price: 350, quantity: 56, lowStockLevel: 5 },
{ name: "Headphones", price: 150, quantity: 35, lowStockLevel: 3 },
{ name: "Stylus", price: 50, quantity: 25, lowStockLevel: 2 }
];

// An array of products in inventory
console.log(inventory);



// Task 2 - Creating a Function to Display Product Details

let displayProductDetails = function (product) {

    let stockStatus;
// if statement to determine stockLevel

    if (product.quantity <= product.lowStockLevel) 
       stockStatus = "Low Stock";
    else
       stockStatus = "In Stock";

console.log(`Product: ${product.name}, Price: $${product.price}, Quantity: ${product.quantity}, Stock: ${stockStatus}`);
};  // Logged the product details name,price,quantity,and stock status

inventory.forEach(product => displayProductDetails(product)); // Used forEach to loop over every product in the inventory array
    // Called displayProductDetails for every product in the array



// Task 3 - Creating a Function to Update Product Stock After Sales

function updateStock(product, unitsSold)
{
    product.quantity -= unitsSold;

    if (product.quantity <= 0) 
        { product.quantity = 0    // If total quantity less sales is 0 
       console.log(`${product.name} is currently out of stock`);}

    else if (product.quantity <= product.lowStockLevel) // If total quantity less sales is between 0 and lowStockLevel
       {console.log(`${product.name} is currently low on stock`);}

    else {   // If total quantity less sales is still above the lowStockLevel
        console.log(`${product.name} is currently in stock`);}
};

inventory.forEach(product => {updateStock(product,34)}) // Example: Sold 34 units of each product



// Task 4 - Creating a Function to Check Low Stock Products

function checkLowStock()
// Iterating over inventory array
{
    inventory.forEach (product => {if (product.quantity <= product.lowStockLevel) 
    // Checking if product's quantity is less than or equal to the low stock level
        { console.log (`${product.name} is low on stock, ${product.quantity} units left.`);
    } })
;}

console.log("Low stock products:");
checkLowStock(); // Checking on low stock products



// Task 5 - Creating a Function to Calculate Total Inventory Value

function calculateInventoryValue () 
{
    // Calculating the value of each product (price * quantity)
   let totalValue = inventory.reduce((total,product) => total+ (product.price * product.quantity), 0);

   // Logged the total inventory value
console.log(`Total inventory value is $${totalValue}`);

      return totalValue;  // returning total value of inventory
}
console.log("Value of inventory at stock:"); // calling the function to calculate total inventory value at stock
calculateInventoryValue();



// Task 6 - Creating a Function to Process a Sale

function processSale (productName, unitsSold)
{
    let product = inventory.find(item => item.name === productName); // For locating product by its name in the inventory

    if (product) {
      updateStock(product, unitsSold);} // Stock gets updated if product is found
    else {
        console.log(`Error: ${productName} is not in the inventory.`);} //Error message for if product is not found in inventory
}

// Example:
processSale("Laptop", 15);
processSale ("amartphone", 10); 

