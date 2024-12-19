// Scroll-to-Top Button Functionality
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = () => {
    if (window.scrollY > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// Filter Services
const filterButtons = document.querySelectorAll(".filter-btn");
const serviceItems = document.querySelectorAll(".service-item");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");

        serviceItems.forEach(item => {
            if (filter === "all" || item.getAttribute("data-category") === filter) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});

// Update Footer Year
document.getElementById("year").textContent = new Date().getFullYear();