// Mobile Nav
const hamburgerMenu = document.querySelector(".mobile-menu-button");

hamburgerMenu.addEventListener("click", () => {
  const isOpened = hamburgerMenu.getAttribute("aria-expanded");
  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    if (isOpened === "false" || isOpened === null) {
      hamburgerMenu.setAttribute("aria-expanded", "true");
    } else {
      hamburgerMenu.setAttribute("aria-expanded", "false");
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const userNameElement = document.getElementById("user-name");
  const storedName = sessionStorage.getItem("userName");
  if (storedName) {
    userNameElement.textContent = storedName;
  }
});
