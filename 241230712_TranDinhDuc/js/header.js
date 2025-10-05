function handleSearch(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    console.log("Tính năng tìm kiếm đang được phát triển");
  }
}

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("overlay");
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    overlay.classList.add("active");
    overlay.style.zIndex = "1000";
  } else {
    overlay.classList.remove("active");
  }
}

function toggleCart() {
  closeAllModals();
  document.getElementById("overlay").classList.add("active");
  document.getElementById("cartModal").classList.add("active");
}

function toggleLogin() {
  closeAllModals();
  document.getElementById("overlay").classList.add("active");
  document.getElementById("loginModal").classList.add("active");
}

function switchToRegister() {
  document.getElementById("loginModal").classList.remove("active");
  document.getElementById("registerModal").classList.add("active");
}

function switchToLogin() {
  document.getElementById("registerModal").classList.remove("active");
  document.getElementById("loginModal").classList.add("active");
}

function closeAllModals() {
  const overlay = document.getElementById("overlay");
  document.getElementById("loginModal").classList.remove("active");
  document.getElementById("registerModal").classList.remove("active");
  document.getElementById("cartModal").classList.remove("active");
  document.getElementById("mobileMenu").classList.remove("active");
  overlay.classList.remove("active");
  overlay.style.zIndex = "999";
}
