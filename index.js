// show go to top button
const topBtn = document.querySelector(".go-top");
window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

// show/hide modal content
const modalNav = document.querySelectorAll(".modal-nav");
const modalList = document.querySelectorAll(".modal-list");

modalNav.forEach((item, index) => {
  item.addEventListener("click", () => {
    modalList[index].classList.toggle("show");
  });
});

// show/hide modal
const openModal = document.querySelector(".mobile-menu");
const closeModal = document.querySelector(".close-modal");
const mobileModal = document.querySelector(".mobile-modal");

openModal.addEventListener("click", () => {
  mobileModal.classList.add("show");
});
closeModal.addEventListener("click", () => {
  mobileModal.classList.remove("show");
});

// show/hide mobile cart modal
const closeCart = document.querySelector(".close-cart-modal");
const openCart = document.querySelector(".mobile-cart");
const cartModal = document.querySelector(".cart-modal");

openCart.addEventListener("click", (e) => {
  e.preventDefault();
  cartModal.style.transform = "translateX(0)";
});
closeCart.addEventListener("click", () => {
  cartModal.style.transform = "translateX(-100%)";
});
