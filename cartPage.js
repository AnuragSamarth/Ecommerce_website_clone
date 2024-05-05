import { productsQuantity } from "./productsQuantity";
import { addProductIntoLocalStorage } from "./addProductsIntoLocalStorage";

const cartContainer = document.querySelector("#cart-container");

export const cartPage = async () => {
  // get the product from localStorage...
  let productArray = JSON.parse(localStorage.getItem("productArray")) || [];

 console.log(productArray);

  let clutter = ''
  productArray.forEach(element => {
     clutter += `
     <div class="cart-product">
     <div class="cart-product-img">
       <img src=${element.image} alt="">
     </div>
     <h4>${element.title}</h4>
     <div>
       <div class="product-quantity" data-product-id="${element._id}">
           <button class="btns decrement">-</button>
           <p class="count">${element.quantity}</p>
           <button class="btns increment">+</button>
       </div>
     </div>
     <div>
       <h4>₹ ${element.price}</h4>
   </div>
     <div>
       <button class="delete-btn" data-product-id="${element._id}">Delete Product</button>
       <button class="product-buy-now btn buy">Buy Now</button>
   </div>
 </div>
     ` 
     cartContainer.innerHTML = clutter;
    });
    
    const quantites = document.querySelectorAll(".product-quantity");
    
    quantites.forEach((elem) => {
        elem.addEventListener("click", (e) => {
        productsQuantity(e);
    });
  });
};

cartPage();


