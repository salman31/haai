// features
fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        const features = document.getElementById('features');
        if(features){
            const compiledfeatures = Handlebars.compile(features.innerHTML);
            document.getElementById('list-features').innerHTML = compiledfeatures(data);
        }
});

// faq
fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        const faq = document.getElementById('faq');
        if (faq) {
            const compiledFaq = Handlebars.compile(faq.innerHTML);
            document.getElementById('list-faq').innerHTML = compiledFaq(data);
        }
});

// menu mobile
const menuToggle = document.getElementById('js-menu-toggle');
const menu = document.getElementById('js-menu');
const body = document.body;

if (menuToggle) {
    menuToggle.addEventListener('click', (e) => {
        menu.classList.toggle('hidden');
    });
    menu.addEventListener('click', (e) => {
        menu.classList.toggle('hidden');
    });
    body.addEventListener('click', (event) => {
        const isClickInsideContainer = menu.contains(event.target);
        const isClickOnToggle = event.target === menuToggle;

        if (!isClickInsideContainer && !isClickOnToggle) {
            menu.classList.add('hidden');
        }
    });
}

// menu scroll
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// password visible
function togglePasswordVisibility() {
    var passwordInput = document.getElementById("passwordInput");
    var eyeIcon = document.getElementById("eyeIcon");
    var eyeIconOff = document.getElementById("eyeIconOff");

    eyeIcon.classList.toggle('hidden');
    eyeIconOff.classList.toggle('hidden');

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}