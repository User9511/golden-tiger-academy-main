// Mobile Nav
const hamburgerMenu = document.querySelector(".mobile-menu-button");
const mobileNavWrapper = document.querySelector(".mobile-nav-wrapper");

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

// Timetable Filter Classes
let classes = document.querySelectorAll(".class");
let highlightedClass;

// Add click event listener to each class element
classes.forEach((tableCell) => {
  tableCell.addEventListener("click", () => {
    // Remove the "grey-out" class from all elements
    classes.forEach((element) => {
      element.classList.add("grey-out");
    });

    // Add the "grey-out" class to all elements except the clicked one
    tableCell.classList.remove("grey-out");

    // Set the highlightedClass to the class name of the clicked element
    highlightedClass = tableCell.dataset.class; // Assuming you have a data-class attribute

    // Now you can use the highlightedClass variable as needed
    console.log("Highlighted class:", highlightedClass);
  });
});

// Add click event listeners to the buttons
document.getElementById("all").addEventListener("click", () => {
  filterClasses("all");
});

document.getElementById("bjj").addEventListener("click", () => {
  filterClasses("bjj");
});

document.getElementById("muay-thai").addEventListener("click", () => {
  filterClasses("muay-thai");
});

document.getElementById("kickboxing").addEventListener("click", () => {
  filterClasses("kickboxing");
});

document.getElementById("korean-kickboxing").addEventListener("click", () => {
  filterClasses("korean-kickboxing");
});

document.getElementById("karate").addEventListener("click", () => {
  filterClasses("karate");
});

document.getElementById("open-mat").addEventListener("click", () => {
  filterClasses("open-mat");
});

// Function to filter classes based on the button clicked
function filterClasses(className) {
  classes.forEach((tableCell) => {
    // If the class matches the button clicked or "all", remove "grey-out" class
    if (className === "all" || tableCell.classList.contains(className)) {
      tableCell.classList.remove("grey-out");
    } else {
      // Otherwise, add "grey-out" class
      tableCell.classList.add("grey-out");
    }
  });

  // Update the highlightedClass variable
  highlightedClass = className;
  console.log("Highlighted class:", highlightedClass);
}
