// show go to top button
const topBtn = document.querySelector(".go-top");

function handleShowGoToTop() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

// window.addEventListener("scroll", handleShowGoToTop);

// show/hide modal content
const modalNav = document.querySelectorAll(".modal-nav");
const modalList = document.querySelectorAll(".modal-list");

modalNav.forEach((item, index) => {
  const handelShowModalContent = () => {
    modalList[index].classList.toggle("show");
  };

  item.addEventListener("click", handelShowModalContent);
});

// show/hide modal
const openModal = document.querySelector(".mobile-menu");
const closeModal = document.querySelector(".close-modal");
const mobileModal = document.querySelector(".mobile-modal");

const handleShowMobileModal = () => {
  mobileModal.classList.add("show");
};
const handleCloseMobileModal = () => {
  mobileModal.classList.remove("show");
};

// openModal.addEventListener("click", handleShowMobileModal);
// closeModal.addEventListener("click", handleCloseMobileModal);

// show/hide mobile cart modal
const closeCart = document.querySelector(".close-cart-modal");
const openCart = document.querySelector(".mobile-cart");
const cartModal = document.querySelector(".cart-modal");

const handeleShowCart = (e) => {
  // e.preventDefault();
  cartModal.style.transform = "translateX(0)";
};
const handleHideCart = () => {
  cartModal.style.transform = "translateX(-100%)";
};

// openCart.addEventListener("click", handeleShowCart);
// closeCart.addEventListener("click", handleHideCart);
