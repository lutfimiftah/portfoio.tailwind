// Hamburger line

const hamburger = document.querySelector('#hamburger');

hamburger.addeventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
});