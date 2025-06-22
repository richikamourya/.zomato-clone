document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const mobileMenu = document.getElementById("mobileMenu");

  menuIcon.addEventListener("click", () => {
    if (mobileMenu.style.display === "block") {
      mobileMenu.style.display = "none";
    } else {
      mobileMenu.style.display = "block";
    }
  });
});


function openModal(type) {
  const modal = document.getElementById("authModal");
  modal.style.display = "block";

  document.getElementById("loginForm").style.display = type === "login" ? "block" : "none";
  document.getElementById("signupForm").style.display = type === "signup" ? "block" : "none";
}

function closeModal() {
  document.getElementById("authModal").style.display = "none";
}

function handleLogin() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (!email || !password) {
    alert("Please enter both email and password.");
  } else {
    alert("Logged in as " + email);
    closeModal();
  }
}

function handleSignup() {
  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();

  if (!name || !email || !password) {
    alert("Please fill in all fields.");
  } else {
    alert("Signed up as " + name);
    closeModal();
  }
}

// Close modal if clicked outside content
window.onclick = function (event) {
  const modal = document.getElementById("authModal");
  if (event.target === modal) {
    closeModal();
  }
};


