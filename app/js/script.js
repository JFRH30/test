document.getElementsByClassName('mobile_hamburger')[0].addEventListener('click', showMobileMenu);
document.getElementsByClassName('mobile_nav_close')[0].addEventListener('click', hideMobileMenu);

function showMobileMenu() {
    console.log('show');
    document.getElementsByClassName('mobile_nav')[0].classList.remove('hidden');
}

function hideMobileMenu() {
    console.log('hide');
    document.getElementsByClassName('mobile_nav')[0].classList.add('hidden');
}

// Slider
var index = 0;
var sec = 5000;
var interval = setInterval(showSlide, sec);
var slides = document.querySelectorAll(".slider-item");
var indicators = document.querySelectorAll(".dot");
var last = slides.length - 1;

function currentSlide(n) {
    clearInterval(interval);
    index = n - 1;
    reset();
    slides[last].className = "slider-item out";
    slides[index].className = "slider-item show";
    indicators[index].className = "dot active";
    interval = setInterval(showSlide, sec);
    last = index;
    index++;
    console.log("index", index);
}

function reset() {
    if (index < 0) { index = slides.length - 1 }
    if (index > slides.length - 1) { index = 0 }
    for (var i = 0; i < slides.length; i++) {
        slides[i].className = "slider-item";
        indicators[i].className = "dot";
    }
}

function showSlide() {
    reset();
    slides[last].className = "slider-item out";
    slides[index].className = "slider-item show";
    indicators[index].className = "dot active";
    last = index;
    index++;
    console.log("index", index);
}

function slideControl(n) {
    clearInterval(interval);
    index += n - 1;
    console.log("sc", index);
    reset();
    slides[last].className = "slider-item out";
    slides[index].className = "slider-item show";
    indicators[index].className = "dot active";
    interval = setInterval(showSlide, sec);
    last = index;
    index++;
    console.log("index", index);
}


showSlide();