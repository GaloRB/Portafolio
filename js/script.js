// --------- quitar scroll a inicio --------------//
/*let arrowBtn = document.querySelector('#btn');
let addScroll = document.querySelector('body');
arrowBtn.addEventListener('click', () => {
    addScroll.classList.remove('hidden-scroll');
});*/

/* color de scrollbar */
let progress = document.querySelector('#progresbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function() {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + '%';
}

// ------ script de particulas ----------------//

particlesJS({
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#00aa9c"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#0076e4",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

//  ---------------- script de typed.js --------------//

const typed = new Typed('.typed', {
    strings: ['<i>Galo Rodrigo</i>', '<i>Soy <br> Desarrollador<br> Web</i>'],
    typeSpeed: 50,
    startDelay: 300,
    backSpeed: 50,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: '|',
    contentType: 'html'
});

/*  ----- menu mobile ----- */

let menuBurger = document.querySelector('#menu-burger');
let line1 = document.querySelector('#line-1');
let line2 = document.querySelector('#line-2');
let line3 = document.querySelector('#line-3');
let frameMenu = document.querySelector('.frame-menu-mobile');
let navMobile = document.querySelector('.nav-mobile');

menuBurger.addEventListener('click', () => {
    line1.classList.toggle('changeline-1');
    line2.classList.toggle('changeline-2');
    line3.classList.toggle('changeline-3');
    navMobile.classList.toggle('active');

});


// --------------  sticky menu ------------//

let about = document.querySelector('#about');
let nav = document.querySelector('#nav');
let altura = nav.offsetTop;
window.addEventListener('scroll', () => {
    if (window.pageYOffset > altura) {
        nav.classList.add('fixed');
        about.style.marginTop = '7rem';
    } else {
        nav.classList.remove('fixed');
        about.style.marginTop = '0';

    }
});

// --------------  sticky menu mobile ------------//



window.addEventListener('scroll', () => {
    if (window.pageYOffset > altura) {
        menuBurger.classList.add('burger-menu-fixed');
        about.style.marginTop = '7rem';
    } else {
        menuBurger.classList.remove('burger-menu-fixed');
        about.style.marginTop = '0';

    }
});


// ------------------------------------------- funciones de animacion ------------------------------------------//
let animacion = document.querySelectorAll(".animacion-arriba");

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animacion.length; i++) {
        let alturaanimacion = animacion[i].offsetTop;
        if (alturaanimacion - 400 < scrollTop) {
            animacion[i].style.opacity = 1;
            animacion[i].classList.add("mostrar-arriba");
        }
    }
}

let animacionServUp = document.querySelectorAll(".animacion-arriba-servicios");

function mostrarScroll3() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animacionServUp.length; i++) {
        let alturaanimacion = animacionServUp[i].offsetTop;
        if (alturaanimacion - 400 < scrollTop) {
            animacionServUp[i].style.opacity = 1;
            animacionServUp[i].classList.add("mostrar-arriba");
        }
    }
}


let animacionAbajo = document.querySelectorAll(".animacion-abajo");

function mostrarScroll1() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animacionAbajo.length; i++) {
        let alturaanimacion = animacionAbajo[i].offsetTop;
        if (alturaanimacion - 400 < scrollTop) {
            animacionAbajo[i].style.opacity = 1;
            animacionAbajo[i].classList.add("mostrar-abajo");
        }
    }
}

let animacionServDown = document.querySelectorAll(".animacion-abajo-servicios");

function mostrarScroll4() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animacionServDown.length; i++) {
        let alturaanimacion = animacionServDown[i].offsetTop;
        if (alturaanimacion - 400 < scrollTop) {
            animacionServDown[i].style.opacity = 1;
            animacionServDown[i].classList.add("mostrar-abajo");
        }
    }
}

let animacionDerecha = document.querySelectorAll(".animacion-derecha");

function mostrarScroll2() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animacionDerecha.length; i++) {
        let alturaanimacion = animacionDerecha[i].offsetTop;
        if (alturaanimacion - 500 < scrollTop) {
            animacionDerecha[i].style.opacity = 1;
            animacionDerecha[i].classList.add("mostrar-derecha");
        }
    }
}

let animacionIzquierda = document.querySelectorAll(".animacion-izquierda");

function mostrarScroll5() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animacionIzquierda.length; i++) {
        let alturaanimacion = animacionIzquierda[i].offsetTop;
        if (alturaanimacion - 500 < scrollTop) {
            animacionIzquierda[i].style.opacity = 1;
            animacionIzquierda[i].classList.add("mostrar-izquierda");
        }
    }
}

window.addEventListener('scroll', mostrarScroll);
window.addEventListener('scroll', mostrarScroll1);
window.addEventListener('scroll', mostrarScroll2);
window.addEventListener('scroll', mostrarScroll3);
window.addEventListener('scroll', mostrarScroll4);
window.addEventListener('scroll', mostrarScroll5);