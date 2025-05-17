let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

function displayCart() {
  const cartItemsDiv = document.getElementById("cart-items");
  const totalPriceEl = document.getElementById("total-price");
  if (!cartItemsDiv || !totalPriceEl) return;

  cartItemsDiv.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const div = document.createElement("div");
    div.textContent = `${item.name} - $${item.price}`;
    cartItemsDiv.appendChild(div);
    total += item.price;
  });

  totalPriceEl.textContent = `Total: $${total}`;
  localStorage.setItem("total", total);
}

document.addEventListener("DOMContentLoaded", displayCart);