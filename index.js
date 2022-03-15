// show go to top button
const goTopBtn = document.querySelector(".go-top");
function handleShowGoToTop() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
}
window.addEventListener("scroll", handleShowGoToTop);

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
const mobileModal = document.querySelector(".mobile-modal");
const handleShowMobileModal = () => {
  mobileModal.classList.add("show");
};
const handleCloseMobileModal = () => {
  mobileModal.classList.remove("show");
};

// show/hide mobile cart modal
const cartModal = document.querySelector(".cart-modal");
const handeleShowCart = (e) => {
  cartModal.style.transform = "translateX(0)";
};
const handleHideCart = () => {
  cartModal.style.transform = "translateX(-100%)";
};

// validation
