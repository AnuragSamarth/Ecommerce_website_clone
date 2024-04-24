export const productsQuantity = (e) => {
  let quantitesProducts;
  if (e.target.classList.contains("decrement")) {
    const count = e.target.nextElementSibling;
    if (count.innerHTML == 0) {
      return;
    } else {
      count.innerHTML = parseInt(count.innerHTML) - 1;
      quantitesProducts = count.innerHTML;
      return;
    }
  } else if (e.target.classList.contains("increment")) {
    const count = e.target.previousElementSibling;
    if (count.innerHTML == 0 || count.innerHTML > 0) {
      count.innerHTML = parseInt(count.innerHTML) + 1;
      quantitesProducts = count.innerHTML;
      return;
    } else {
      return;
    }
  }
};
