console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

// This should create the ul and the li's with the individual products details
function renderProducts(products) {
  const ul = document.createElement("ul");

  for (let product of products) {
    const li = document.createElement("li");

    li.innerHTML = `
      <h2>${product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Rating: ${product.rating}</p>
    `;
    ul.appendChild(li);
  }
  const main = document.querySelector("main");
  main.appendChild(ul);
}

renderProducts(products);
