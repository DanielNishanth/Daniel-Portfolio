const sections = document.querySelectorAll(
    ".services, .about, .skills, .projects, .why-me, .process, .freelance-cta, .contact"
);

const revealSections = () => {

    sections.forEach((section) => {

        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("show-section");
        }

    });

};

window.addEventListener("scroll", revealSections);

revealSections();