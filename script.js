const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const viewCvBtn = document.getElementById("view-cv-btn");
const cvModal = document.getElementById("cv-modal");
const closeCvModal = document.getElementById("close-cv-modal");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

if (viewCvBtn && cvModal) {
  viewCvBtn.addEventListener("click", () => {
    cvModal.classList.add("open");
  });
}

if (closeCvModal && cvModal) {
  closeCvModal.addEventListener("click", () => {
    cvModal.classList.remove("open");
  });
}

if (cvModal) {
  cvModal.addEventListener("click", (event) => {
    if (event.target === cvModal) {
      cvModal.classList.remove("open");
    }
  });
}

