function showConfig(size){

    const result = document.getElementById("configResult");

    if (!result) {
        console.log("configResult nicht gefunden!");
        return;
    }

    if(size === "small"){

        result.innerHTML = `
            <div class="config-result-content">

                <span class="config-label">
                    IHRE PASSENDE KAFFEELÖSUNG
                </span>

                <h3>Kompakte Kaffeelösung</h3>

                <p>
                    Für kleinere Teams bieten wir eine kompakte
                    Kaffeelösung für den täglichen Büroalltag.
                </p>

                <div class="config-features">

                    <div>
                        <i data-lucide="coffee"></i>
                        <span>Hochwertiger Kaffee</span>
                    </div>

                    <div>
                        <i data-lucide="wrench"></i>
                        <span>Wartung & Service</span>
                    </div>

                    <div>
                        <i data-lucide="package"></i>
                        <span>Regelmäßige Versorgung</span>
                    </div>

                    <div>
                        <i data-lucide="credit-card"></i>
                        <span>Modernes Bezahlen</span>
                    </div>

                </div>

                <div class="config-price">
                    <span>Ihre Investition</span>
                    <strong>Individuelles Angebot</strong>
                    <small>
                        Abhängig von Ausstattung, Nutzung und Verbrauch.
                    </small>
                </div>

                <a href="#kontakt" class="btn-gold">
                    Kaffeelösung anfragen →
                </a>

            </div>

            <div class="config-visual">

                <div class="coffee-machine-placeholder">

                    <i data-lucide="coffee"></i>

                    <span>BEISPIELDARSTELLUNG</span>

                    <strong>
                        Moderne Kaffeelösung
                    </strong>

                    <small>
                        Das tatsächliche Maschinenmodell
                        kann je nach Bedarf variieren.
                    </small>

                </div>

            </div>
        `;

    }


    if(size === "medium"){

        result.innerHTML = `
            <div class="config-result-content">

                <span class="config-label">
                    IHRE PASSENDE KAFFEELÖSUNG
                </span>

                <h3>Kaffeelösung für 20–50 Mitarbeiter</h3>

                <p>
                    Eine leistungsfähige Kaffeelösung für Unternehmen
                    mit regelmäßigem täglichen Kaffeeverbrauch.
                </p>

                <div class="config-features">

                    <div>
                        <i data-lucide="coffee"></i>
                        <span>Hochwertiger Kaffee</span>
                    </div>

                    <div>
                        <i data-lucide="wrench"></i>
                        <span>Wartung & Service</span>
                    </div>

                    <div>
                        <i data-lucide="package"></i>
                        <span>Regelmäßige Versorgung</span>
                    </div>

                    <div>
                        <i data-lucide="credit-card"></i>
                        <span>Modernes Bezahlen</span>
                    </div>

                </div>

                <div class="config-price">
                    <span>Ihre Investition</span>
                    <strong>Individuelles Angebot</strong>
                    <small>
                        Abhängig von Ausstattung, Nutzung und Verbrauch.
                    </small>
                </div>

                <a href="#kontakt" class="btn-gold">
                    Kaffeelösung anfragen →
                </a>

            </div>

            <div class="config-visual">

                <div class="coffee-machine-placeholder">

                    <i data-lucide="coffee"></i>

                    <span>BEISPIELDARSTELLUNG</span>

                    <strong>
                        Moderne Kaffeelösung
                    </strong>

                    <small>
                        Das tatsächliche Maschinenmodell
                        kann je nach Bedarf variieren.
                    </small>

                </div>

            </div>
        `;

    }


    if(size === "large"){

        result.innerHTML = `
            <div class="config-result-content">

                <span class="config-label">
                    IHRE PASSENDE KAFFEELÖSUNG
                </span>

                <h3>Kaffeelösung für 50–100 Mitarbeiter</h3>

                <p>
                    Für größere Teams empfehlen wir eine leistungsfähige
                    Lösung, abgestimmt auf den tatsächlichen Bedarf.
                </p>

                <div class="config-features">

                    <div>
                        <i data-lucide="coffee"></i>
                        <span>Hochwertiger Kaffee</span>
                    </div>

                    <div>
                        <i data-lucide="wrench"></i>
                        <span>Wartung & Service</span>
                    </div>

                    <div>
                        <i data-lucide="package"></i>
                        <span>Regelmäßige Versorgung</span>
                    </div>

                    <div>
                        <i data-lucide="credit-card"></i>
                        <span>Modernes Bezahlen</span>
                    </div>

                </div>

                <div class="config-price">
                    <span>Ihre Investition</span>
                    <strong>Individuelles Angebot</strong>
                    <small>
                        Abhängig von Ausstattung, Nutzung und Verbrauch.
                    </small>
                </div>

                <a href="#kontakt" class="btn-gold">
                    Kaffeelösung anfragen →
                </a>

            </div>

            <div class="config-visual">

                <div class="coffee-machine-placeholder">

                    <i data-lucide="coffee"></i>

                    <span>BEISPIELDARSTELLUNG</span>

                    <strong>
                        Moderne Kaffeelösung
                    </strong>

                    <small>
                        Das tatsächliche Maschinenmodell
                        kann je nach Bedarf variieren.
                    </small>

                </div>

            </div>
        `;

    }


    if(size === "enterprise"){

        result.innerHTML = `
            <div class="config-result-content">

                <span class="config-label">
                    IHRE PASSENDE KAFFEELÖSUNG
                </span>

                <h3>Individuelle Kaffeelösung</h3>

                <p>
                    Für Unternehmen mit mehr als 100 Mitarbeitern
                    planen wir die Kaffeelösung individuell.
                </p>

                <div class="config-features">

                    <div>
                        <i data-lucide="coffee"></i>
                        <span>Hochwertiger Kaffee</span>
                    </div>

                    <div>
                        <i data-lucide="wrench"></i>
                        <span>Wartung & Service</span>
                    </div>

                    <div>
                        <i data-lucide="package"></i>
                        <span>Regelmäßige Versorgung</span>
                    </div>

                    <div>
                        <i data-lucide="credit-card"></i>
                        <span>Modernes Bezahlen</span>
                    </div>

                </div>

                <div class="config-price">
                    <span>Ihre Investition</span>
                    <strong>Auf Anfrage</strong>
                    <small>
                        Individuell abgestimmt auf Ihren Standort.
                    </small>
                </div>

                <a href="#kontakt" class="btn-gold">
                    Kaffeelösung anfragen →
                </a>

            </div>

            <div class="config-visual">

                <div class="coffee-machine-placeholder">

                    <i data-lucide="coffee"></i>

                    <span>BEISPIELDARSTELLUNG</span>

                    <strong>
                        Moderne Kaffeelösung
                    </strong>

                    <small>
                        Das tatsächliche Maschinenmodell
                        kann je nach Bedarf variieren.
                    </small>

                </div>

            </div>
        `;

    }


    result.classList.add("visible");

    if(typeof lucide !== "undefined"){
        lucide.createIcons();
    }

    setTimeout(() => {

        result.scrollIntoView({
            behavior:"smooth",
            block:"nearest"
        });

    },150);

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

window.addEventListener("load", () => {

    const heroVideo = document.querySelector(".hero-video");

    if (heroVideo) {

        heroVideo.playbackRate = 0.15;

        console.log("Playback Rate:", heroVideo.playbackRate);

    }

});
