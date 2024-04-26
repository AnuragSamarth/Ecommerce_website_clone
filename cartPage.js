const cartContainer = document.querySelector("#cart-container");

const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  const data = await res.json();
  return data;
};

export const cartPage = async () => {
  // get the product from localStorage...
  let productArray = JSON.parse(localStorage.getItem("productArray")) || [];

  const products = await fetchProducts();
  
  const filteredProducts = products.filter((product) =>
    productArray.some((element) => Number(element.id) === product._id)
  );
  
  let clutter = ''
  filteredProducts.forEach(element => {
     clutter += `
     <div class="cart-product">
     <div class="cart-product-img">
       <img src=${element.image} alt="">
     </div>
     <h4>${element.title}</h4>
     <div>
       <div class="product-quantity" data-product-id="${element._id}">
           <button class="btns decrement">-</button>
           <p class="count">1</p>
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
};

cartPage();


