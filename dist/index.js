
// carousel play pouse button
const playPauseButton = document.querySelector('#carouselPlayPause');
const playPauseIcon = document.querySelector('#carouselPlayPauseIcon');
const carouselElement = document.querySelector('#carouselExampleAutoplaying');
let playPauseIconCheck = false;

document.addEventListener('DOMContentLoaded', function () {
    const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 2000, // Time in ms between slides
        pause: false // Start autoplay
    });

    playPauseButton.addEventListener('click', function () {
        if (carouselElement.classList.contains('paused')) {
            carousel.cycle();
            carouselElement.classList.remove('paused');
            playPauseIcon.classList.remove('bi-play-fill');
            playPauseIcon.classList.add('bi-pause-fill');
            playPauseIconCheck = false;
        } else {
            carousel.pause();
            carouselElement.classList.add('paused');
            playPauseIcon.classList.remove('bi-pause-fill');
            playPauseIcon.classList.add('bi-play-fill');
            playPauseIconCheck = true;
        }
    });
});

// // // // //
function carouselTriggerBtn() {
    if (playPauseIconCheck) {
        carouselElement.classList.remove('paused');
        playPauseIcon.classList.remove('bi-play-fill');
        playPauseIcon.classList.add('bi-pause-fill');
    }
}

let triggerBtn=document.querySelectorAll('.carousel-trigger-button');
triggerBtn.forEach(function(button) {
    button.addEventListener('click', carouselTriggerBtn);
});


// carousel play pouse button end



// slick slide
$(document).ready(function () {
    $('.your-class').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            }
        ]
    });
});
// slick slide end


