// FAQ Section
const faqs = document.querySelectorAll(".question-wrapper");
const answers = document.querySelectorAll(".faq-answer");

faqs.forEach((faq, index) => {
  faq.addEventListener("click", () => toggleAccordion(index));
});

function toggleAccordion(index) {
  const faqToggle = faqs[index].getAttribute("aria-expanded");
  const answerToggle = answers[index].getAttribute("aria-hidden");
  const iconPlus = faqs[index].querySelector(".icon-plus");
  const iconMinus = faqs[index].querySelector(".icon-minus");

  for (let i = 0; i < faqs.length; i++) {
    faqs[i].setAttribute("aria-expanded", false);
    faqs[i].querySelector(".icon-plus").classList.remove("hide");
    faqs[i].querySelector(".icon-minus").classList.add("hide");
    answers[i].setAttribute("aria-hidden", true);
  }

  if (faqToggle === "false") {
    faqs[index].setAttribute("aria-expanded", true);
    iconPlus.classList.add("hide");
    iconMinus.classList.remove("hide");
    answers[index].setAttribute("aria-hidden", false);
  }
}
