

// animation link in nav

const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".nav__link");
const navHeight = document.querySelector("header").offsetHeight;

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

navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        link.classList.add('active-link');
    });
});

// hidding swipe-icon

const secondSection = document.querySelector(".promo");
const swipeIcon = document.querySelector('.promo__swipe-wrap');

window.addEventListener('scroll', () => {
    const secondSectionTop = secondSection.offsetTop;
    
    if(scrollY >= secondSectionTop + navHeight) {
    for (const child of swipeIcon.children) {
        child.style.opacity = '0';
    }
}
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

// forms

const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          textarea = document.querySelectorAll('textarea');



    // checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: 'Загрузка...',
        success: 'Скоро мы с вами свяжемся!',
        failure: 'Ошибка'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        const res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    };
 
    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
        textarea.forEach(item => {
            item.value = '';
        });
    };


    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status', 'title', 'title_fz14');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            if(item.getAttribute('data-calc') === 'end'){
                for(let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postData('../mailer/smart.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    // clearState();
                    // Object.keys(state).forEach(key => delete state[key]); //!!!
                    setTimeout(() => {
                        statusMessage.remove();
                        document.querySelectorAll('[data-modal]').forEach(item => {
                            statusMessage.remove();
                            // item.classList.remove('active');
                            // document.body.style.overflow = '';
                            // document.body.style.marginRight = `0px`;
                        });
                    }, 5000);
                });
        });
    });

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