
document.getElementById("year").textContent = new Date().getFullYear();
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-nav");
menuButton.addEventListener("click", () => {
const isOpen = menuButton.getAttribute("aria-expanded") === "true";
menuButton.setAttribute("aria-expanded", String(!isOpen));
navigation.classList.toggle("is-open", !isOpen);
});