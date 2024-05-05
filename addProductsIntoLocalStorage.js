export const addProductIntoLocalStorage = (productID,productQuantity,productPrice,productImage,productTitle)=>{
// Check if there is already a product array in the localStorage
let productArray = JSON.parse(localStorage.getItem('productArray')) || [];

// Check if the product already exists in the array
let existingProductIndex = productArray.findIndex(product => product.id === productID);

if (existingProductIndex !== -1) {
  // console.log(existingProductIndex)
  // If product exists, update the quantity
  productArray[existingProductIndex].quantity = productQuantity;
  productArray[existingProductIndex].price = +(productQuantity * productPrice); 
  productArray[existingProductIndex].image = productImage;
  productArray[existingProductIndex].title = productTitle;

    // Remove the product from productArray
  if(productArray[existingProductIndex].quantity == 0){
    productArray.splice(existingProductIndex, 1);
  }
}
else {
  // If product doesn't exist, add a new product object
  let product = {
    id: productID,
    quantity: productQuantity,
    price: productPrice,
    image: productImage,
    title: productTitle
  };
  productArray.push(product);
}

// Save the updated product array to the localStorage
localStorage.setItem('productArray',JSON.stringify(productArray));
}