/* =====================================
   PORTFOLIO JAVASCRIPT
   Amerika Mihretu Portfolio
===================================== */


/* =====================================
   DARK MODE TOGGLE
===================================== */

const themeToggle = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;


// Load saved theme

const savedTheme = localStorage.getItem("theme") || "light";

htmlElement.setAttribute("data-theme", savedTheme);


// Update icon

if (themeToggle) {

    themeToggle.textContent =
        savedTheme === "dark" ? "☀️" : "🌙";


    themeToggle.addEventListener("click", () => {


        const currentTheme =
            htmlElement.getAttribute("data-theme");


        const newTheme =
            currentTheme === "dark"
                ? "light"
                : "dark";


        htmlElement.setAttribute(
            "data-theme",
            newTheme
        );


        localStorage.setItem(
            "theme",
            newTheme
        );


        themeToggle.textContent =
            newTheme === "dark"
                ? "☀️"
                : "🌙";


    });

}



/* =====================================
   MOBILE NAVIGATION
===================================== */


const hamburger =
    document.getElementById("hamburger");


const navLinks =
    document.querySelector(".nav-links");



if (hamburger && navLinks) {


    // Open / close menu

    hamburger.addEventListener("click", () => {


        navLinks.classList.toggle("active");


        hamburger.classList.toggle("open");


    });



    // Close menu after clicking link


    navLinks
        .querySelectorAll("a")
        .forEach(link => {


            link.addEventListener(
                "click",
                () => {


                    navLinks.classList.remove(
                        "active"
                    );


                    hamburger.classList.remove(
                        "open"
                    );


                }
            );


        });



    // Close menu when clicking outside


    document.addEventListener(
        "click",
        (event) => {


            const clickedInsideMenu =
                navLinks.contains(event.target);


            const clickedHamburger =
                hamburger.contains(event.target);



            if (
                !clickedInsideMenu &&
                !clickedHamburger
            ) {


                navLinks.classList.remove(
                    "active"
                );


                hamburger.classList.remove(
                    "open"
                );


            }


        }
    );

}



/* =====================================
   ACTIVE NAVIGATION LINK
===================================== */


const sections =
    document.querySelectorAll("section");


const navItems =
    document.querySelectorAll(
        ".nav-links a"
    );



window.addEventListener(
    "scroll",
    () => {


        let currentSection = "";


        sections.forEach(section => {


            const sectionTop =
                section.offsetTop - 150;


            const sectionHeight =
                section.clientHeight;



            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {


                currentSection =
                    section.getAttribute("id");


            }


        });



        navItems.forEach(link => {


            link.style.color =
                "";


            if (
                link.getAttribute("href")
                ===
                `#${currentSection}`
            ) {


                link.style.color =
                    "var(--primary)";


            }


        });


    }
);




/* =====================================
   SCROLL REVEAL ANIMATION
===================================== */


const revealElements =
    document.querySelectorAll(
        ".project-card, .skill-card, .contact-links a"
    );



const revealObserver =
    new IntersectionObserver(
        entries => {


            entries.forEach(entry => {


                if(entry.isIntersecting){


                    entry.target.style.opacity =
                        "1";


                    entry.target.style.transform =
                        "translateY(0)";


                    revealObserver.unobserve(
                        entry.target
                    );


                }


            });


        },
        {
            threshold:0.15
        }
    );



revealElements.forEach(element => {


    element.style.opacity = "0";


    element.style.transform =
        "translateY(30px)";


    element.style.transition =
        "all .6s ease";


    revealObserver.observe(
        element
    );


});



/* =====================================
   CURRENT YEAR AUTO UPDATE
===================================== */


const footer =
    document.querySelector("footer p");


if(footer){


    const year =
        new Date().getFullYear();


    footer.innerHTML =
        footer.innerHTML.replace(
            "2026",
            year
        );


}