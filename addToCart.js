import { addProductIntoLocalStorage } from "./addProductsIntoLocalStorage";
export const addToCart = (e)=>{
    if(e.target.classList.contains('add')){
        let productID = e.target.getAttribute('data-product-id');
        let quantity = e.target.parentElement.previousElementSibling.querySelector('.count').innerHTML;
        let price = e.target.parentElement.previousElementSibling.querySelector('h4').innerHTML;
        price = price.replace("₹","");
        let image = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.querySelector("img").getAttribute('src');
        let title = e.target.parentElement.previousElementSibling.previousElementSibling.querySelector("h4").innerHTML;
        // console.log(title)
        // console.log(image)
        // console.log(`Product ID: ${productID}, Quantity: ${quantity}, Price: ${price}`);
        addProductIntoLocalStorage(productID,quantity,price,image,title)
    }else{
        return;
    }
}