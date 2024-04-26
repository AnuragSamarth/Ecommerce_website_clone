import { addToCart } from "./addToCart";
import { productsQuantity } from "./productsQuantity";
const productPage = document.querySelector("#product-page1");
// const productPage2 = document.querySelector('#product-page2');

const fetchProduct_1 = async () => {
  try {
    const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
    if (!res.ok) {
      throw Error("Some thing went wrong from our side sorry");
    }
    const data = await res.json();
    let cluter = "";
    data.forEach((elem) => {
      const { _id, image, title, price } = elem;
      cluter += `
  <div class="product">
  <div class="love-product">
      <button><i class="ri-heart-line"></i></button>
  </div>
  <div class="product-img">
      <img src=${image}
          alt="">
  </div>
  <div class="title-product">
      <h4>${title}</h4>
      <div class="product-rating">
          <p><i class="ri-star-half-s-line"></i> <span>4.5</span></p>
      </div>
  </div>
  <div class="product-price-quantity">
      <div class="product-price">
          <h4>₹ ${price}</h4>
      </div>
      <div class="product-quantity" data-product-id="${_id}">
          <button class="btns decrement">-</button>
          <p class="count">1</p>
          <button class="btns increment">+</button>
      </div>
  </div>
  <div class="product-btns">
      <button class="product-add-to-cart btn add" data-product-id="${_id}">Add to <i class="ri-shopping-cart-fill"></i></button>
      <button class="product-buy-now btn buy">Buy Now</button>
  </div>
</div>
  `;
    });
    productPage.innerHTML = cluter;
  } catch (error) {
    alert(error);
  }

  const productBtns = document.querySelectorAll(".product-btns");
  const quantites = document.querySelectorAll(".product-quantity");

  productBtns.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      addToCart(e);
    });
  });

  quantites.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      productsQuantity(e);
    });
  });
};
fetchProduct_1();

// const fetchProduct_2 = async()=>{
//     const res = await fetch('https://fakestoreapiserver.reactbd.com/next');
//     const data = await res.json();
//     let cluter = ''
//     data.forEach((elem)=>{
//       cluter += `
//       <div class="product">
//       <div class="love-product">
//           <button><i class="ri-heart-line"></i></button>
//       </div>
//       <div class="product-img">
//           <img src=${elem.image}
//               alt="">
//       </div>
//       <div class="title-product">
//           <h4>${elem.title}</h4>
//           <div class="product-rating">
//               <p><i class="ri-star-half-s-line"></i> <span>4.5</span></p>
//           </div>
//       </div>
//       <div class="product-price-quantity">
//           <div class="product-price">
//               <h4>₹ ${elem.price}</h4>
//           </div>
//           <div class="product-quantity">
//               <button class="btns decrement">-</button>
//               <p>0</p>
//               <button class="btns increment">+</button>
//           </div>
//       </div>
//       <div class="product-btns">
//           <button class="product-add-to-cart btn">Add to <i class="ri-shopping-cart-fill"></i></button>
//           <button class="product-buy-now btn">Buy Now</button>
//       </div>
//     </div>
//       `
//     })
//     productPage2.innerHTML = cluter;
// }
// fetchProduct_2();

// const productBtn = document.querySelector(".product-btns")
// console.log(productBtn)
