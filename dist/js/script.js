// nav

const navItem = document.querySelectorAll('.nav__link');
navItem.forEach(item => {
    // item.classList.remove('active-link');
    item.addEventListener('click', () => {
        navItem.forEach(item => {
            item.classList.remove('active-link');
        });
        item.classList.add('active-link');
    });
});


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