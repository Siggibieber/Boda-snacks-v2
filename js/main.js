// ==========================
// BODA KAFFEE KONFIGURATOR
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    const steps = document.querySelectorAll(".config-step");

    const nextButton = document.getElementById("configNext");

    const backButton = document.getElementById("configBack");

    const progressFill = document.getElementById("progressFill");

    const stepLabel = document.getElementById("stepLabel");

    const progressPercent = document.getElementById("progressPercent");

    const completeBox = document.getElementById("configComplete");


    // Wenn der neue Konfigurator nicht vorhanden ist:
    // nichts weiter ausführen.

    if (
        !steps.length ||
        !nextButton ||
        !backButton
    ) {
        return;
    }


    // ==========================
    // EINSTELLUNGEN
    // ==========================

    let currentStep = 1;

    const totalSteps = steps.length;


    // ==========================
    // GESAMMELTE DATEN
    // ==========================

    const configData = {

        employees: "",

        location: "",

        drinks: [],

        cups: "",

        container: "",

        extras: []

    };


    // ==========================
    // AUSWAHL-BUTTONS
    // ==========================

    const options =
        document.querySelectorAll(".config-option");


    options.forEach(option => {

        option.addEventListener("click", () => {

            const group =
                option.dataset.group;

            const value =
                option.dataset.value;


            // Andere Auswahl derselben Gruppe entfernen

            document
                .querySelectorAll(
                    `.config-option[data-group="${group}"]`
                )
                .forEach(item => {

                    item.classList.remove("selected");

                });


            // Aktuelle Auswahl markieren

            option.classList.add("selected");


            // Auswahl speichern

            configData[group] = value;


            // Kurz warten,
            // damit die Auswahl sichtbar wird.

            setTimeout(() => {

                if (currentStep < totalSteps) {

                    nextStep();

                }

            }, 250);

        });

    });


    // ==========================
    // CHECKBOXEN
    // ==========================

    const checkboxes =
        document.querySelectorAll(
            '.config-checkbox input[type="checkbox"]'
        );


    checkboxes.forEach(checkbox => {

        checkbox.addEventListener("change", () => {

            const group =
                checkbox.name;


            const checked =
                document.querySelectorAll(
                    `input[name="${group}"]:checked`
                );


            const values = [];


            checked.forEach(item => {

                values.push(item.value);

            });


            if (group === "drinks") {

                configData.drinks =
                    values;

            }


            if (group === "extras") {

                configData.extras =
                    values;

            }

        });

    });


    // ==========================
    // SCHRITT ANZEIGEN
    // ==========================

    function showStep(step) {

        steps.forEach(item => {

            item.classList.remove("active");

        });


        const selectedStep =
            document.querySelector(
                `.config-step[data-step="${step}"]`
            );


        if (selectedStep) {

            selectedStep.classList.add("active");

        }


        currentStep = step;


        updateProgress();


        backButton.disabled =
            currentStep === 1;


        if (currentStep === totalSteps) {

            nextButton.textContent =
                "Anfrage vorbereiten →";

        } else {

            nextButton.textContent =
                "Weiter →";

        }


        // Zum Konfigurator scrollen

        const configurator =
            document.getElementById(
                "konfigurator"
            );


        if (configurator) {

            configurator.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    }


    // ==========================
    // WEITER
    // ==========================

    function nextStep() {

        if (currentStep < totalSteps) {

            showStep(
                currentStep + 1
            );

        } else {

            finishConfigurator();

        }

    }


    // ==========================
    // ZURÜCK
    // ==========================

    function previousStep() {

        if (currentStep > 1) {

            showStep(
                currentStep - 1
            );

        }

    }


    // ==========================
    // FORTSCHRITT
    // ==========================

    function updateProgress() {

        const percentage =
            Math.round(
                (currentStep / totalSteps) * 100
            );


        progressFill.style.width =
            percentage + "%";


        progressPercent.textContent =
            percentage + "%";


        stepLabel.textContent =
            `Schritt ${currentStep} von ${totalSteps}`;

    }


    // ==========================
    // KONFIGURATOR ABSCHLIESSEN
    // ==========================

    function finishConfigurator() {

        console.log(
            "BODA Kaffee-Konfiguration:",
            configData
        );


        // Daten global speichern

        window.bodaCoffeeConfig =
            configData;


        // Abschluss anzeigen

        completeBox.classList.add(
            "visible"
        );


        // Zum Abschluss scrollen

        completeBox.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

    }


    // ==========================
    // BUTTONS
    // ==========================

    nextButton.addEventListener(
        "click",
        nextStep
    );


    backButton.addEventListener(
        "click",
        previousStep
    );


    // ==========================
    // START
    // ==========================

    updateProgress();

});

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

        heroVideo.playbackRate = 1;

        console.log("Playback Rate:", heroVideo.playbackRate);

    }

});

// ==========================
// KONFIGURATOR → KONTAKTFORMULAR
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    const configButton =
        document.querySelector("#configComplete .btn-gold");

    const contactMessage =
        document.getElementById("contactMessage");


    if (!configButton || !contactMessage) {
        return;
    }


    configButton.addEventListener("click", () => {

        // ==========================
        // MITARBEITER
        // ==========================

        const employees =
            document.querySelector(
                '.config-option[data-group="employees"].selected'
            );


        // ==========================
        // EINSATZORT
        // ==========================

        const location =
            document.querySelector(
                '.config-option[data-group="location"].selected'
            );


        // ==========================
        // TASSEN PRO TAG
        // ==========================

        const cups =
            document.querySelector(
                '.config-option[data-group="cups"].selected'
            );


        // ==========================
        // AUSGABE
        // ==========================

        const container =
            document.querySelector(
                '.config-option[data-group="container"].selected'
            );


        // ==========================
        // GETRÄNKE
        // ==========================

        const drinks =
            Array.from(
                document.querySelectorAll(
                    'input[name="drinks"]:checked'
                )
            ).map(input => input.value);


        // ==========================
        // ZUSATZLEISTUNGEN
        // ==========================

        const extras =
            Array.from(
                document.querySelectorAll(
                    'input[name="extras"]:checked'
                )
            ).map(input => input.value);


        // ==========================
        // TEXT
        // ==========================

        const message =
`KAFFEE-KONFIGURATOR

Mitarbeiter: ${employees?.dataset.value || "Keine Angabe"}

Einsatzort: ${location?.dataset.value || "Keine Angabe"}

Getränke: ${
    drinks.length
        ? drinks.join(", ")
        : "Keine Angabe"
}

Tassen pro Tag: ${cups?.dataset.value || "Keine Angabe"}

Ausgabe: ${container?.dataset.value || "Keine Angabe"}

Zusatzleistungen: ${
    extras.length
        ? extras.join(", ")
        : "Keine zusätzlichen Leistungen"
}

Ich interessiere mich für eine passende Kaffeelösung von BODA Snacks.`;


        // ==========================
        // INS KONTAKTFELD SCHREIBEN
        // ==========================

        contactMessage.value = message;


        // ==========================
        // KONTAKTFELD SICHTBAR MACHEN
        // ==========================

        contactMessage.focus();

    });

});
/* =====================================
   COOKIE CONSENT
===================================== */

function loadAnalytics() {

    const script = document.createElement('script');

    script.async = true;
    script.src =
        'https://www.googletagmanager.com/gtag/js?id=G-6RJ6RX8XWZ';

    document.head.appendChild(script);

    script.onload = function () {

        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        window.gtag = gtag;

        gtag('js', new Date());

        gtag('config', 'G-6RJ6RX8XWZ');
    };
}


document.addEventListener('DOMContentLoaded', () => {

    const banner =
        document.getElementById('cookie-banner');

    const saved =
        localStorage.getItem('bodaCookiesAccepted');


    if (saved === 'true') {

        banner.style.display = 'none';

        loadAnalytics();
    }


    if (saved === 'false') {

        banner.style.display = 'none';
    }


    document
        .getElementById('cookie-accept')
        .addEventListener('click', () => {

            localStorage.setItem(
                'bodaCookiesAccepted',
                'true'
            );

            banner.style.display = 'none';

            loadAnalytics();
        });


    document
        .getElementById('cookie-decline')
        .addEventListener('click', () => {

            localStorage.setItem(
                'bodaCookiesAccepted',
                'false'
            );

            banner.style.display = 'none';
        });

});
