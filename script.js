// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar nav');
hamburger.addEventListener('click', () => navMenu.classList.toggle('active'));

// Cart Button Counter
let cartCount = 0;
document.querySelectorAll('.add-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    cartCount++;
    document.querySelector('.cart-count').textContent = cartCount;
  });
});

