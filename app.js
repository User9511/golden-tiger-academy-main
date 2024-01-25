const hamburgerMenu = document.querySelector(".mobile-menu-button");
const mobileNavWrapper = document.querySelector(".mobile-nav-wrapper");

// Mobile  Nav
hamburgerMenu.addEventListener("click", () => {
  const isOpened = hamburgerMenu.getAttribute("aria-expanded");
  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    if (isOpened === "false" || isOpened === null) {
      hamburgerMenu.setAttribute("aria-expanded", "true");
      mobileNavWrapper.setAttribute("aria-expanded", "true");
      mobileNavWrapper.classList.remove("hidden");
    } else {
      hamburgerMenu.setAttribute("aria-expanded", "false");
      mobileNavWrapper.setAttribute("aria-expanded", "false");
    }
  }
});
