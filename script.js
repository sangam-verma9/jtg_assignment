new Swiper('.card-wrapper', {
    loop: true,
    speed: 700,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        800: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        },
    }
});

const play = document.querySelector('.custom_button');
const video = document.querySelector('#video');
const video_button = document.querySelector(".video_button");
video.addEventListener('click', (e) => {
    if (video.paused) {
        video.play();
        play.style.display = 'none';
    }
    else {
        video.pause();
        play.style.display = 'block';
    }
})

video_button.addEventListener('click', (e) => {
    if (video.paused) {
        video.play();
        play.style.display = 'none';
    }
    else {
        video.pause();
        play.style.display = 'block';
    }
})

const cartbutton = document.getElementById('cartbutton');
const requestdish = document.getElementById('requestdish');
const overlay = document.querySelector('.overlay');
const backtomenu = document.getElementById('backtomenu');
const cartmodel = document.querySelector('.cart-model-container');
const requestdishmodel = document.querySelector('.request-model-container');
const cancelrequest = document.querySelector('#requestcancel');
const submitrequest = document.querySelector('#requestsubmit');
const reqdisname = document.getElementById('name');
cartbutton.addEventListener('click', () => {
    overlay.style.display = 'block';
    cartmodel.style.display = 'block';
    document.body.style.overflow = 'hidden';
})

backtomenu.addEventListener('click', () => {
    overlay.style.display = 'none';
    cartmodel.style.display = 'none';
    document.body.style.overflow = 'auto';
})
requestdish.addEventListener('click', () => {
    overlay.style.display = 'block';
    requestdishmodel.style.display = 'block';
    document.body.style.overflow = 'hidden';
})
cancelrequest.addEventListener('click', () => {
    overlay.style.display = 'none';
    requestdishmodel.style.display = 'none';
    document.body.style.overflow = 'auto';
})
submitrequest.addEventListener('click', () => {
    // if (reqdisname.value == '') {
    //     alert('Please enter dish name');
    //     return;
    // }
    overlay.style.display = 'none';
    requestdishmodel.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '0px';
})

