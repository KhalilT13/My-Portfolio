const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const links = document.querySelectorAll(".nav-links a");

links.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
    revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100 && elementBottom > 100) {
            element.classList.add("active");
        } else {
            element.classList.remove("active");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();