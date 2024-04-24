export const addProductIntoLocalStorage = (productID,productQuantity,productPrice)=>{
// Check if there is already a product array in the localStorage
let productArray = JSON.parse(localStorage.getItem('productArray')) || [];

// Check if the product already exists in the array
let existingProductIndex = productArray.findIndex(product => product.id === productID);

if (existingProductIndex !== -1) {
  // If product exists, update the quantity
  productArray[existingProductIndex].quantity = productQuantity;
  productArray[existingProductIndex].price = +(productQuantity * productPrice); 
} else {
  // If product doesn't exist, add a new product object
  let product = {
    id: productID,
    quantity: productQuantity,
    price: productPrice
  };
  productArray.push(product);
}

// Save the updated product array to the localStorage
localStorage.setItem('productArray',JSON.stringify(productArray));
}