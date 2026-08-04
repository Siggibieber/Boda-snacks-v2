function showConfig(size){

const result=document.getElementById("configResult");

if(size==="small"){

result.innerHTML=`
<h3>1–20 Mitarbeiter</h3>
<p>Empfehlung: Kompakter Premium-Kaffeevollautomat.</p>
<a class="btn-gold" href="#kontakt">Kostenlos beraten lassen</a>
`;

}

if(size==="medium"){

result.innerHTML=`
<h3>20–50 Mitarbeiter</h3>
<p>Empfehlung: Kaffeevollautomat mit Milchsystem.</p>
<a class="btn-gold" href="#kontakt">Kostenlos beraten lassen</a>
`;

}

if(size==="large"){

result.innerHTML=`
<h3>50–100 Mitarbeiter</h3>
<p>Empfehlung: Hochleistungs-Kaffeeautomat mit zwei Bohnenbehältern.</p>
<a class="btn-gold" href="#kontakt">Kostenlos beraten lassen</a>
`;

}

if(size==="enterprise"){

result.innerHTML=`
<h3>100+ Mitarbeiter</h3>
<p>Empfehlung: Individuelle Premium-Kaffeelösung für hohe Auslastung.</p>
<a class="btn-gold" href="#kontakt">Kostenlos beraten lassen</a>
`;

}

}
// ==========================
// SCROLL ANIMATION
// ==========================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:0.15});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});
// ==========================
// NAVBAR SCROLL
// ==========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        navbar.classList.add("navbar-scroll");
    } else {
        navbar.classList.remove("navbar-scroll");
    }

});
// ==========================
// MOBILE MENU
// ==========================

const burger=document.querySelector(".hamburger");

const nav=document.querySelector(".nav-links");

burger.addEventListener("click",()=>{

nav.classList.toggle("mobile-open");

});
// ==========================
// COUNTER
// ==========================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = +counter.dataset.target;

        let current = 0;

        const step = Math.max(1, Math.ceil(target / 60));

        const timer = setInterval(() => {

            current += step;

            if (current >= target) {

                current = target;
                clearInterval(timer);

            }

            counter.innerText = current;

        }, 20);

        counterObserver.unobserve(counter);

    });

}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));
