const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("toggle");
    navLinks.classList.toggle("active");
    // navLinks.classList.toggle("show");
    

});

// Close menu after clicking a link

navLinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        hamburger.classList.remove("toggle");
        navLinks.classList.remove("active");

    });

});