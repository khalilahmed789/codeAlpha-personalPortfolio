let sideBarToggle = document.querySelectorAll(".side-bar-toggle");
let sideBar = document.querySelector(".side-bar");
let outsiderBtn = document.querySelector(".outsider-btn");

sideBarToggle.forEach((btn) => {
  btn.addEventListener("click", () => {
    sideBar.classList.toggle("shown");
    outsiderBtn.classList.toggle("hidden");
  });
});






// forms
const form = document.querySelector("#contact-form");
const btn = document.querySelector("#form-submit-btn")
const formStatus = document.querySelector("#form-status")

form.addEventListener("submit", (e) => {
  e.preventDefault();

  btn.disabled = true;
  btn.textContent = "Sending...";
  formStatus.className = "";
  formStatus.textContent = "";

  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        formStatus.className = "success";
        formStatus.textContent = "Message sent successfully!";
        form.reset();

        btn.disabled = false;
        btn.textContent = "Send Message";
      } else {
        formStatus.className = "error";
        formStatus.textContent = "Something went wrong. Please try again.";

        btn.disabled = false;
        btn.textContent = "Send Message";
      }
    })
    .catch(() => {
      formStatus.className = "error";
      formStatus.textContent =
        "Unable to send the message. Please check your internet connection.";

      btn.disabled = false;
      btn.textContent = "Send Message";
    });


});