console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

function findDom(dom) {
  return document.querySelector(dom)
}

const productsList = findDom("#product-list");
if (!productsList) {
  console.warn("Product list DOM element is not found in the document!")
}

function renderProducts(products) {
  for (product of products) {
    const li = document.createElement("li");
    li.innerHTML = `
      <div style='padding: 1rem;'>
        Title: ${product.name}<br />
        Rate: ${product.rating}<br />
        Price: ${product.price}
      </div>
    `;

    productsList.appendChild(li)
  }
}

renderProducts(products); 
