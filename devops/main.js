//========= preloader
const preloader = document.getElementById("preloader");
window.addEventListener("DOMContentLoaded", () => {
  preloader.style.display = "none";
});

//========= change height of the navbar on scroll
const navBar = document.querySelector("#navbar");
const scrollToTopElem = document.getElementById("scrollToTop");

document.addEventListener("scroll", (e) => {
  if (window.scrollY > 100) {
    navBar.classList.remove("h-20");
    navBar.classList.add("h-16");

    // handle show scrolltop
    scrollToTopElem.classList.remove("hidden");
    scrollToTopElem.classList.add("flex");
  } else {
    navBar.classList.add("h-20");
    navBar.classList.remove("h-16");
    // handle remove scrolltop
    scrollToTopElem.classList.remove("flex");
    scrollToTopElem.classList.add("hidden");
  }
});
//========= click to scoll to top
scrollToTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
//========= timer

const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

function countdownTimer() {
  const difference = +new Date("2024-02-02 12:00") - +new Date();
  let remaining = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    const parts = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
    day.innerHTML = parts.days;
    hour.innerHTML = parts.hours;
    minute.innerHTML = parts.minutes;
    second.innerHTML = parts.seconds;
  }
}
countdownTimer();
setInterval(countdownTimer, 1000);
//========= initial AOS (for animate on scroll)
AOS.init();

//========= handle tabs
const tabs = document.querySelectorAll(".tabs");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab, i) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tab.classList.add("active");
    tabContents[i].classList.add("active");
  });
});

const counterSection = document.getElementById("counterSection");
const speakers = document.getElementById("speakers");
const providers = document.getElementById("providers");
const workshopCapacity = document.getElementById("workshopCapacity");
const conferenceCapacity = document.getElementById("conferenceCapacity");
const countUp = (target, element) => {
  let currentNumber = 0;
  const updateCounter = () => {
    currentNumber += 1;
    element.textContent = currentNumber;

    if (currentNumber < target) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  };
  requestAnimationFrame(updateCounter);
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        countUp(speakers.dataset.targetNumber, speakers);
        countUp(providers.dataset.targetNumber, providers);
        countUp(workshopCapacity.dataset.targetNumber, workshopCapacity);
        countUp(conferenceCapacity.dataset.targetNumber, conferenceCapacity);

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

observer.observe(counterSection);

const hamMenu = document.getElementById("hamMenu");
const aside = document.getElementById("aside");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  aside.classList.toggle("active");
});
