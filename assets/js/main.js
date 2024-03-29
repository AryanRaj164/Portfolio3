var options = {
    strings: ["Data Science Student.","Data Science Student."],
    typeSpeed: 80, // typing speed in milliseconds
    backSpeed: 10, // backspacing speed in milliseconds
    backDelay: 2000, // delay before starting to backspace in milliseconds
    startDelay: 100, // delay before starting to type in milliseconds
    loop: true, // loop the animation
  };

  var typed = new Typed(".text", options);

// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    menuIcon.classList.toggle('active');
}

// scroll section
let Selections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a ');

window.onscroll = () => {
   Selections.forEach(sec => { 
   let top = window.scrollY;
   let offset = sec.offsetTop - 100;
   let height = sec.offsetHeight;
   let id = sec.getAttribute('id');


    if(top >= offset && top < offset + height) {
        // active navbar links 
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[herf*' + id + ']').classList.add('active');
        });
    }
});

    // sticky header
    let header = document.querySelectorAll('section');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
    let header = document.querySelectorAll('header');

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading',{ origin:'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{ origin:'left'});