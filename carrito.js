// Event listener para los botones "Agregar al carrito"
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// Función para agregar un elemento al carrito
function addToCart(event) {
  const product = event.target.getAttribute('data-product');
  const price = parseFloat(event.target.getAttribute('data-price'));

  // Crear el elemento del carrito
  const cartItem = document.createElement('li');
  cartItem.textContent = `${product} - $${price.toFixed(2)}`;

  // Agregar el elemento al carrito
  const cartItemsList = document.getElementById('cart-items');
  cartItemsList.appendChild(cartItem);

  // Actualizar el total del carrito
  const cartTotal = document.getElementById('cart-total');
  const currentTotal = parseFloat(cartTotal.textContent.substring(1));
  const newTotal = currentTotal + price;
  cartTotal.textContent = `$${newTotal.toFixed(2)}`;
}
