// // Mobile Nav
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

const form = document.querySelector(".form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const mobileInput = document.getElementById("mobile");
const messageInput = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission
  if (validateInputs()) {
    sessionStorage.setItem("userName", nameInput.value.trim());
    form.submit(); // Submit the form if validation passes
  }
});

const validateInputs = () => {
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const mobileValue = mobileInput.value.trim();
  const messageValue = messageInput.value.trim();

  let isValid = true; // Assume form is valid initially

  if (nameValue === "") {
    setError(nameInput, "Name is required");
    isValid = false; // Mark form as invalid
  } else {
    setSuccess(nameInput);
  }

  if (emailValue === "") {
    setError(emailInput, "Email is required");
    isValid = false; // Mark form as invalid
  } else if (!isValidEmail(emailValue)) {
    setError(emailInput, "Please enter a valid email");
    isValid = false; // Mark form as invalid
  } else {
    setSuccess(emailInput);
  }

  if (mobileValue === "") {
    setError(mobileInput, "A Mobile number is required");
    isValid = false; // Mark form as invalid
  } else if (!isValidMobileNumber(mobileValue)) {
    setError(mobileInput, "Please enter a valid mobile number");
    isValid = false; // Mark form as invalid
  } else if (mobileValue.length > 14) {
    setError(mobileInput, "Mobile number cannot exceed 14 characters");
    isValid = false; // Mark form as invalid
  } else {
    setSuccess(mobileInput);
  }

  if (messageValue === "") {
    setError(messageInput, "A Message is required");
    isValid = false; // Mark form as invalid
  } else {
    setSuccess(messageInput);
  }

  return isValid; // Return validation result
};

const isValidEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidMobileNumber = (mobileNumber) => {
  // Regular expression for validating mobile numbers (allowing digits only)
  const re = /^[0-9]{9,}$/;
  return re.test(mobileNumber);
};

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};
