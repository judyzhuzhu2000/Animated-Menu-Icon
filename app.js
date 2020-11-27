const navTriggleEl = document.querySelector(".hamburger");
const hamburgerBarsEl = document.querySelectorAll("span");

function toggleNav() {
    navTriggleEl.addEventListener("click", function() {
        animateHamburgerbars();
    })

    function animateHamburgerbars() {
        for(list of hamburgerBarsEl) {
            list.classList.toggle("change");
        }
    }
}
toggleNav();