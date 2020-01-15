const main = document.querySelector(".main");
const about = document.querySelector(".about");
const portfolio = document.querySelector(".portfolio");
const gallery = document.querySelector(".gallery");
const img = document.querySelectorAll(".gallery__img");

const openPortfolio = document.querySelector(".main__button--openPortfolio");
const openAbout = document.querySelector(".main__button--openAbout");
const openGallery = document.querySelector(".projects__openGallery");

const closePortfolio = document.querySelector(".portfolio__button");
const closeAbout = document.querySelector(".about__button");
const closeGallery = document.querySelector(".gallery__button");

const showPortfolio = function () {
    main.style.transitionDelay = "0s";
    main.style.transform = "rotateX(10deg)";
    portfolio.style.transitionDelay = ".3s";
    portfolio.style.transform = "translateY(0)";
};
const showAbout = function () {

    main.style.transitionDelay = "0s";
    main.style.transform = "rotateX(10deg)";
    about.style.transitionDelay = ".3s";
    about.style.transform = "translateY(0)"
};

const showGallery = function () {

    // portfolio.style.transitionDelay = "0s";
    // portfolio.style.transform = "scale(0.75)";
    // gallery.style.transitionDelay = ".3s";
    gallery.style.transform = "translateY(0)";
    let delay = 0;
    img.forEach((el) => {
        delay += 0.1;
        el.style.transitionDelay = `${delay}s`;
        console.log(`${delay} s`);
        el.style.opacity = "1"
    })
};

const hidePortfolio = function () {
    main.style.transitionDelay = ".3s";
    main.style.transform = "rotateX(0)";
    portfolio.style.transitionDelay = "0s";
    portfolio.style.transform = "translateY(-100%)";
};
const hideAbout = function () {

    main.style.transitionDelay = ".3s";
    main.style.transform = "rotateX(0)";
    about.style.transitionDelay = "0s";
    about.style.transform = "translateY(-100%)";
};

const hideGallery = function () {

    // portfolio.style.transitionDelay = ".3s";
    // portfolio.style.transform = "scale(1)";
    // gallery.style.transitionDelay = "0s";
    gallery.style.transform = "translateY(-100%)";
    img.forEach((el) => {
        el.style.transitionDelay = "0s";
        el.style.opacity = "0";
    })
};

openPortfolio.addEventListener("click", showPortfolio);
openAbout.addEventListener("click", showAbout);
openGallery.addEventListener("click", showGallery);
closePortfolio.addEventListener("click", hidePortfolio);
closeAbout.addEventListener("click", hideAbout);
closeGallery.addEventListener("click", hideGallery); 