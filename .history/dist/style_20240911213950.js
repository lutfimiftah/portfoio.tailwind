// Hamburger line

const hamburger = document.querySelector('#hamburger');
const navbar

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
});

// navbar-fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav ){
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
    
}