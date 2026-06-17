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

// // Timetable Filter Classes
// let classes = document.querySelectorAll(".class");
// let highlightedClass;

// // Add click event listener to each class element
// classes.forEach((tableCell) => {
//   tableCell.addEventListener("click", () => {
//     // Remove the "grey-out" class from all elements
//     classes.forEach((element) => {
//       element.classList.add("grey-out");
//     });

//     // Add the "grey-out" class to all elements except the clicked one
//     tableCell.classList.remove("grey-out");

//     // Set the highlightedClass to the class name of the clicked element
//     highlightedClass = tableCell.dataset.class; // Assuming you have a data-class attribute

//     // Now you can use the highlightedClass variable as needed
//     console.log("Highlighted class:", highlightedClass);
//   });
// });

// // Add click event listeners to the buttons
// document.getElementById("all").addEventListener("click", () => {
//   filterClasses("all");
// });

// document.getElementById("bjj").addEventListener("click", () => {
//   filterClasses("bjj");
// });

// document.getElementById("muay-thai").addEventListener("click", () => {
//   filterClasses("muay-thai");
// });

// document.getElementById("kickboxing").addEventListener("click", () => {
//   filterClasses("kickboxing");
// });

// document.getElementById("korean-kickboxing").addEventListener("click", () => {
//   filterClasses("korean-kickboxing");
// });

// document.getElementById("karate").addEventListener("click", () => {
//   filterClasses("karate");
// });

// document.getElementById("open-mat").addEventListener("click", () => {
//   filterClasses("open-mat");
// });

// // Function to filter classes based on the button clicked
// function filterClasses(className) {
//   classes.forEach((tableCell) => {
//     // If the class matches the button clicked or "all", remove "grey-out" class
//     if (className === "all" || tableCell.classList.contains(className)) {
//       tableCell.classList.remove("grey-out");
//     } else {
//       // Otherwise, add "grey-out" class
//       tableCell.classList.add("grey-out");
//     }
//   });

//   // Update the highlightedClass variable
//   highlightedClass = className;
//   console.log("Highlighted class:", highlightedClass);
// }

// Grab all timetable sections on the page
const timetableSections = document.querySelectorAll(".timetable-section-container-outer");

// Loop through each timetable section independently
timetableSections.forEach((section) => {
  // Find the classes and buttons ONLY within the current section
  const classes = section.querySelectorAll(".class");
  const filterButtons = section.querySelectorAll(".time-table-button");

  // 1. Add click event listener to each class table cell
  classes.forEach((tableCell) => {
    tableCell.addEventListener("click", () => {
      // Grey out all classes in this specific table
      classes.forEach((element) => {
        element.classList.add("grey-out");
      });
      // Highlight the clicked one
      tableCell.classList.remove("grey-out");
    });
  });

  // 2. Add click event listeners to the filter buttons
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Get the filter type from the custom data attribute we added in the HTML
      const filterType = button.getAttribute("data-filter");

      // Filter classes based on the button clicked
      classes.forEach((tableCell) => {
        if (filterType === "all" || tableCell.classList.contains(filterType)) {
          tableCell.classList.remove("grey-out");
        } else {
          tableCell.classList.add("grey-out");
        }
      });
    });
  });
});
