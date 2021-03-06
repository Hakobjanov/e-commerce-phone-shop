//AOS animation init
AOS.init();

//navigation
const navOpen = document.querySelector(".nav__hamburger");
const navClose = document.querySelector(".close__toggle");
const menu = document.querySelector(".nav__menu");
const navContainer = document.querySelector(".nav__menu");

navOpen.addEventListener("click", () => {
  menu.classList.add("open");
  document.body.classList.add("active");
  navContainer.style.left = "0";
  navContainer.style.width = "30rem";
});

navClose.addEventListener("click", () => {
  menu.classList.remove("open");
  document.body.classList.remove("active");
  navContainer.style.left = "-30rem";
  navContainer.style.width = "0";
});

//glide js
const slider1 = document.querySelector("#glide_1");
const slider2 = document.querySelector("#glide_2");
const slider3 = document.querySelector("#glide_3");
const slider4 = document.querySelector("#glide_4");

if (slider1) {
  new Glide(slider1, {
    type: "carousel",
    startAt: 0,
    autoplay: 3000,
    hoverpause: true,
    perView: 1,
    animationDuration: 800,
    animationTimingFunc: "linear",
  }).mount();
}

if (slider2) {
  new Glide(slider2, {
    type: "carousel",
    startAt: 0,
    hoverpause: true,

    perView: 4,
    animationDuration: 800,
    animationTimingFunc: "ease-in-out",
    breakpoints: {
      1200: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
    },
  }).mount();
}

if (slider3) {
  new Glide(slider3, {
    type: "carousel",
    startAt: 0,
    hoverpause: true,
    perView: 1,
    animationDuration: 800,
    animationTimingFunc: "ease-in-out",
  }).mount();
}

if (slider4) {
  new Glide(slider4, {
    type: "carousel",
    startAt: 0,
    hoverpause: true,
    autoplay: 2000,
    perView: 3,
    animationDuration: 800,
    animationTimingFunc: "ease-in-out",
    breakpoints: {
      998: {
        perView: 2,
      },
      768: {
        perView: 1,
      },
    },
  }).mount();
}

//PopUp
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup__close");

if (popup) {
  closePopup.addEventListener("click", () => {
    popup.classList.add("hide__popup");
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      popup.classList.remove("hide__popup");
    }, 500);
  });
}

//Fixed Navigation
const navBar = document.querySelector(".navigation");
const gotoTop = document.querySelector(".goto-top");
const scrollLink = document.querySelectorAll(".scroll-link");

Array.from(scrollLink).map((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navBar.getBoundingClientRect().height;
    const fixNav = navBar.classList.contains("fix__nav");
    let position = element.offsetTop - navHeight;

    if (!fixNav) {
      position = position - navHeight;
    }

    window.scrollTo({
      lwft: 0,
      top: position,
    });
    navContainer.style.left = "-30rem";
    document.body.classList.remove("active");
  });
});

window.addEventListener("scroll", (e) => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navBar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navBar.classList.add("fix__nav");
  } else {
    navBar.classList.remove("fix__nav");
  }

  if (scrollHeight > 300) {
    gotoTop.classList.add("show-top");
  } else {
    gotoTop.classList.remove("show-top");
  }
});
