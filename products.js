const productPage = document.querySelector('#product-page1');
const productPage2 = document.querySelector('#product-page2');

const fetchProduct_1 = async()=>{
const res = await fetch('https://fakestoreapiserver.reactbd.com/tech')
const data = await res.json()
let cluter = ''
  data.forEach((elem)=>{
  cluter += `
  <div class="product">
  <div class="love-product">
      <button><i class="ri-heart-line"></i></button>
  </div>
  <div class="product-img">
      <img src=${elem.image}
          alt="">
  </div>
  <div class="title-product">
      <h4>${elem.title}</h4>
      <div class="product-rating">
          <p><i class="ri-star-half-s-line"></i> <span>4.5</span></p>
      </div>
  </div>
  <div class="product-price-quantity">
      <div class="product-price">
          <h4>₹ ${elem.price}</h4>
      </div>
      <div class="product-quantity">
          <button class="btns">-</button>
          <p>0</p>
          <button class="btns">+</button>
      </div>
  </div>
  <div class="product-btns">
      <button class="product-add-to-cart btn">Add to <i class="ri-shopping-cart-fill"></i></button>
      <button class="product-buy-now btn">Buy Now</button>
  </div>
</div>
  `
  })
  productPage.innerHTML = cluter;
}

fetchProduct_1();

const fetchProduct_2 = async()=>{
    const res = await fetch('https://fakestoreapiserver.reactbd.com/next');
    const data = await res.json();
    console.log(data)
    let cluter = ''
    data.forEach((elem)=>{
      cluter += `
      <div class="product">
      <div class="love-product">
          <button><i class="ri-heart-line"></i></button>
      </div>
      <div class="product-img">
          <img src=${elem.image}
              alt="">
      </div>
      <div class="title-product">
          <h4>${elem.title}</h4>
          <div class="product-rating">
              <p><i class="ri-star-half-s-line"></i> <span>4.5</span></p>
          </div>
      </div>
      <div class="product-price-quantity">
          <div class="product-price">
              <h4>₹ ${elem.price}</h4>
          </div>
          <div class="product-quantity">
              <button class="btns">-</button>
              <p>0</p>
              <button class="btns">+</button>
          </div>
      </div>
      <div class="product-btns">
          <button class="product-add-to-cart btn">Add to <i class="ri-shopping-cart-fill"></i></button>
          <button class="product-buy-now btn">Buy Now</button>
      </div>
    </div>
      `
    })
    productPage2.innerHTML = cluter;
}
fetchProduct_2();