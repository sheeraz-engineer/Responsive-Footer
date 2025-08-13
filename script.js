
document.getElementById("year").textContent = new Date().getFullYear();


const scrollBtn = document.getElementById("scrollToTop");

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
