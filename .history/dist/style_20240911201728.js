// Hamburger line

// const hamburger = document.querySelector('#hamburger');

// hamburger.addeventListener('click', function() {
//     hamburger.classList.toggle('hamburger-active');
// });

const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});