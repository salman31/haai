// features
fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        const features = document.getElementById('features').innerHTML;
        const compiledfeatures = Handlebars.compile(features);
        document.getElementById('list-features').innerHTML = compiledfeatures(data);
});

// faq
fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        const faq = document.getElementById('faq').innerHTML;
        const compiledFaq = Handlebars.compile(faq);
        document.getElementById('list-faq').innerHTML = compiledFaq(data);
});

// menu mobile
const menuToggle = document.getElementById('js-menu-toggle');
const menu = document.getElementById('js-menu');
const body = document.body;

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

// menu scroll
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}