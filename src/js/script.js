

// animation link in nav

const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".nav__link");
const navHeight = document.querySelector("header").offsetHeight;
console.log(navHeight);

window.addEventListener('scroll', () => {
    
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        // console.log(section.getAttribute("id"));

        if (scrollY >= sectionTop - navHeight) {
            current = section.getAttribute("id");
        }
    });

    navbarLinks.forEach(link => {
        link.classList.remove("active-link");

        if(link.classList.contains(current+"-link")) {
            link.classList.add("active-link");
        }
    });
});


// accordion

const accordion = () => {
    const btn = document.querySelector('.nav__toggle');
    const appsIcon = document.querySelector('.uil-apps');

    btn.addEventListener('click', function() {
        if(!btn.classList.contains('active-style')) {
            btn.classList.remove('active-style');
            btn.previousElementSibling.classList.remove('active-content');
            btn.previousElementSibling.style.minHeight = '0px';
        }

        btn.classList.toggle('active-style');
        btn.previousElementSibling .classList.toggle('active-content');

        if(btn.classList.contains('active-style')) {
            btn.previousElementSibling.style.minHeight = 150 + 'px';
            appsIcon.classList.toggle('uil-times');

            // btn.previousElementSibling.style.opacity = 1;

        } else {
            btn.previousElementSibling.style.minHeight = '0px';
            btn.previousElementSibling.style.paddingBottom = '0px';
            appsIcon.classList.toggle('uil-times');


        }
    });
};

accordion();

// preloader

window.onload = function () {
    document.querySelector('.preloader').classList.add('loaded-hiding');
    window.setTimeout(function () {
      document.querySelector('.preloader').classList.add('loaded');
      document.querySelector('.preloader').classList.remove('loaded-hiding');
    }, 500);
};

// window.addEventListener("load", function() {
    
//     if (991 <= window.innerWidth) {
//         const promoBubble = document.querySelectorAll('.promo__bubble');

//         promoBubble.forEach(i => {
//             i.style.display = 'block';
//         });
//     }

// });

// const hamburger = document.querySelector('.hamburger'),
//         menu = document.querySelector('.menu'),
//         closeElem = document.querySelector('.menu__close');

// hamburger.addEventListener('click', () => {
//     menu.classList.add('active')
// });

// closeElem.addEventListener('click', () => {
//     menu.classList.remove('active')
// });

// const counters = document.querySelectorAll('.skills__ratings-counter'),
//     lines = document.querySelectorAll('.skills__ratings-line span');

// counters.forEach( (item, i) => {
//     lines[i].style.width = item.innerHTML
// });