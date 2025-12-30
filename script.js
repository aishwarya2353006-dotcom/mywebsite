// HAMBURGER MENU
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar nav');
hamburger.addEventListener('click', ()=>{navMenu.classList.toggle('active');});

// CART BUTTON
let cartCount = 0;
document.querySelectorAll('.add-cart').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    cartCount++;
    document.querySelector('.cart-count').textContent = cartCount;
  });
});
