const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click",()=>{
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class",isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click",()=>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class","ri-menu-line");
});

const scrollRevealOptions = {
    distance:"50px",
    origin : "bottom",
    duration : 1000,
};

//header section

ScrollReveal().reveal(".header-container p",{
    ...scrollRevealOptions,
});


ScrollReveal().reveal(".header-container h1",{
    ...scrollRevealOptions,
    delay:500,
});

ScrollReveal().reveal(".about-image img",{
    ...scrollRevealOptions,
    origin:"left",
});

ScrollReveal().reveal(".about-content .section-subheader",{
    ...scrollRevealOptions,
    delay:500,
});
ScrollReveal().reveal(".about-content .section-header",{
    ...scrollRevealOptions,
    delay:1000,
});
ScrollReveal().reveal(".about-content .section-description",{
    ...scrollRevealOptions,
    delay:1500,
});
ScrollReveal().reveal(".about-btn",{
    ...scrollRevealOptions,
    delay:2000,
});

//room 
ScrollReveal().reveal(".room-card",{
    ...scrollRevealOptions,
    interval:500,
});

//service-container
ScrollReveal().reveal(".service-list li",{
    ...scrollRevealOptions,
    interval:500,
    origin:"right",
});