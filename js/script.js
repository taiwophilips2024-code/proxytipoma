document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    if (!hamburger || !navLinks) return;

    // Toggle mobile navigation
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("toggle");
        navLinks.classList.toggle("active");

        // Update accessibility state
        const isExpanded = hamburger.classList.contains("toggle");
        hamburger.setAttribute("aria-expanded", isExpanded);
    });

    // Close menu after clicking a navigation link
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("toggle");
            navLinks.classList.remove("active");
            hamburger.setAttribute("aria-expanded", "false");
        });
    });
});