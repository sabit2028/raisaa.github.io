// Countdown Timer
const countdown = () => {
    const birthdayDate = new Date("2024-09-20T00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = birthdayDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (timeLeft < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "Happy Birthday!";
    }
};

const timer = setInterval(countdown, 1000);

// Background Slideshow
let slideIndex = 0;

const showSlides = () => {
    const slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    slides[slideIndex - 1].style.opacity = "1";
    setTimeout(showSlides, 3000);
};

showSlides();
