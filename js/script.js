$(document).ready(function () {
    $('.gallery-slider').slick({
        slidesToShow: 1,
        fade: true,
        arrows: true,
        speed: 700,
    });
});

const videoOverlay = document.querySelector('.about__video-overlay');
const videoItem = document.querySelector('video');
const videoBtn = document.querySelector('.about__video-btn');

const playVideo = () => {
    videoOverlay.classList.add('about__video-overlay_hiden');
    videoItem.setAttribute('autoplay', '');
    videoItem.play();
};

const pauseVideo = () => {
    videoOverlay.classList.remove('about__video-overlay_hiden');
    videoItem.pause();
};

videoBtn.addEventListener('click', playVideo);

videoItem.addEventListener('click', () => {
    if (videoItem.paused == true) {
        playVideo();
    }
    pauseVideo();
});

const select = document.getElementById('cities');
const city = document.querySelector('.address__city');
const fullAddress = document.querySelector('.address__full');
const officeAddress = document.querySelector('.address__office');
const ekaterinburgMap = document.getElementById('ekaterinburg-map');
const tyumenMap = document.getElementById('tyumen-map');

select.addEventListener('change', function () {
    if (select.value === 'Tyumen') {
        city.textContent = 'г. Тюмень';
        fullAddress.textContent = '625049, Россия , Тюменская область, город Тюмень, улица Магнитогорская, 11 стр. 2';
        officeAddress.style.display = 'none';
        ekaterinburgMap.style.display = 'none';
        tyumenMap.style.display = 'block';
    } else if (select.value === 'Ekaterinburg') {
        city.textContent = 'г. Екатеринбург';
        fullAddress.textContent = '620075, Россия, Свердловская область, город Екатеринбург, ул. Карла Либкнехта, 22, офис 419';
        officeAddress.style.display = 'block';
        ekaterinburgMap.style.display = 'block';
        tyumenMap.style.display = 'none';
    };
});

const anchors = document.querySelectorAll('a[href^="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const id = anchor.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};