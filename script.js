// PRODUCT MODAL
const modal = document.getElementById('product-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalPrice = document.getElementById('modal-price');
const closeModal = document.querySelector('.modal .close');

document.querySelectorAll('.product-card img').forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = img.src;
        modalTitle.textContent = img.nextElementSibling.textContent;
        modalPrice.textContent = img.nextElementSibling.nextElementSibling.textContent;
    });
});

closeModal.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', e => {if(e.target == modal) modal.style.display = 'none';});

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
