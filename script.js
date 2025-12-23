// AUTO FADE
document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade");
    fadeElements.forEach((el, i) => {
        setTimeout(() => {
            el.classList.add("show");
        }, i * 200); // staggered fade
    });
});

// THEME TOGGLE
const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
