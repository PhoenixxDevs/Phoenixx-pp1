const homeSection = document.getElementById("section-home");
const eventsSection = document.getElementById("section-events");
const aboutSection = document.getElementById("section-about");
const gallerySection = document.getElementById("section-gallery");
const connectSection = document.getElementById("section-connect");
const title = document.getElementById("title");
const header = document.querySelector("header");
const linksSocial = document.getElementById("links-social");
const burger = document.getElementById("burger");
const burgerNav = document.getElementById("nav-container-burger");
const navContainer = document.getElementById("nav-container");
const form = document.getElementById("form");
const submitConfirmation = document.getElementById("submit-confirmation");
const navChildren = navContainer.children[0].children;
const eventsNav = navChildren[0];
const aboutNav = navChildren[1];
const connectNav = navChildren[2];
const galleryNav = navChildren[3];
const socialElements = linksSocial.children[0].children;
const imgScrollContainer = document.getElementById("img-gallery");
const imgGallery = imgScrollContainer.querySelectorAll("img");

const customClasses = {
  hidden: "hidden",
  active: "active",
  navResponsive: "nav-responsive",
  titleResponsive: "title-responsive",
  openMenu: "open-menu",
};

let navClone;
let burgerOpen = false;
let imgNum = 0;
let scrolling = false;

function resetGallery() {
  for (let i = 0; i < imgGallery.length; i++) {
    imgGallery[i].classList.add("hidden");
  }
  imgGallery[0].classList.remove("hidden");
  imgNum = 0;
}

function cycleImage(direction) {
  imgGallery[imgNum].classList.add("hidden");
  if (!direction) {
    imgNum -= 1;
    if (imgNum < 0) {
      imgNum = imgGallery.length - 1;
    }
    imgGallery[imgNum].classList.remove("hidden");
  } else {
    imgNum += 1;
    if (imgNum > imgGallery.length - 1) {
      imgNum = 0;
    }
    imgGallery[imgNum].classList.remove("hidden");
  }
}

function scrollToTop(element) {
  element.scrollTop = 0;
}

function toggleSocials(state) {
  // Cycle through all elements in social link list and set display none
  for (let i = 0; i < socialElements.length; i++) {
    toggleElementClass(socialElements[i], customClasses.hidden, state);
  }
}

function toggleElementClass(element, className, state) {
  // if state then add, else remove
  state
    ? element.classList.add(className)
    : element.classList.remove(className);
}

function handleBurger() {
  for (let i = 0; i < burger.children.length; i++) {
    burger.children[i].classList.toggle(customClasses.openMenu);
  }
  if (!burgerOpen) {
    // clone current navigation
    navClone = navContainer.children[0].cloneNode(true);
    for (let j = 0; j < navClone.children.length; j++) {
      toggleElementClass(navClone.children[j], customClasses.hidden, 0);
    }
    // Find element with active class and remove it
    const activeElement = navClone.querySelector(".active");
    if (activeElement) {
      navClone.removeChild(activeElement);
    }
    // add clone to burger nav menu
    burgerNav.appendChild(navClone);
    toggleElementClass(burgerNav, customClasses.hidden, 0);
    burgerOpen = true;
  } else {
    burgerNav.removeChild(navClone);
    toggleElementClass(burgerNav, customClasses.hidden, 1);
    burgerOpen = false;
  }
}

function pageReformat(section) {
  if (section != "home") {
    toggleElementClass(homeSection, customClasses.hidden, 1); //hide home section
    toggleElementClass(title, customClasses.titleResponsive, 1); // move phoenixx
    navContainer.appendChild(title); // move title to nav container
    if (window.innerWidth < 1024) {
      // If tablet or below make burger menu
      toggleElementClass(navContainer, customClasses.navResponsive, 1);
      toggleElementClass(burger, "hidden", 0);
      if (window.innerWidth < 768) {
        // If mobile or below hide socials
        toggleSocials(1);
        // If Gallery, keep Instagram
        section === "gallery"
          ? toggleElementClass(socialElements[1], customClasses.hidden, 0)
          : toggleElementClass(socialElements[1], customClasses.hidden, 1);
      }
    }
  } else {
    toggleElementClass(homeSection, customClasses.hidden, 0); // show home section
    toggleElementClass(title, customClasses.titleResponsive, 0); // move phoenixx
    header.appendChild(title); // move title to original position
    header.appendChild(navContainer); // move nav to original position
    if (window.innerWidth < 1024) {
      // If tablet or below remove burger menu
      toggleElementClass(burger, "hidden", 1);
      toggleElementClass(navContainer, customClasses.navResponsive, 0);
      toggleElementClass(navContainer, customClasses.active, 0);
      if (window.innerWidth < 768) {
        // If mobile or below show socials
        toggleSocials(0);
      }
    }
  }
}

function removeActiveAllSections() {
  toggleElementClass(eventsSection, customClasses.active, 0);
  toggleElementClass(gallerySection, customClasses.active, 0);
  toggleElementClass(aboutSection, customClasses.active, 0);
  toggleElementClass(connectSection, customClasses.active, 0);
  toggleElementClass(homeSection, customClasses.active, 0);
}

function setActiveSection(section) {
  //HANDLES NAV HIDING
  // Turns off active class on all nav labels apart from current
  if (section === "home") {
    toggleElementClass(navContainer.children[0], customClasses.active, 0);
    for (let j = 0; j < navChildren.length; j++) {
      toggleElementClass(navChildren[j], customClasses.active, 0);
      toggleElementClass(navChildren[j], customClasses.hidden, 0);
    }
  } else {
    for (let i = 0; i < navChildren.length; i++) {
      toggleElementClass(navChildren[i], customClasses.active, 0);
      if (section === navChildren[i].id) {
        // stops current page label from being hidden
        continue;
      } else {
        toggleElementClass(navChildren[i], customClasses.hidden, 1); // hide all other page labels for making burger menu
      }
      // makes nav item appear from burger
    }
  }

  removeActiveAllSections();

  switch (section) {
    case "events":
      toggleElementClass(eventsNav, customClasses.active, 1);
      toggleElementClass(navContainer.children[0], customClasses.active, 1);
      toggleElementClass(eventsSection, customClasses.active, 1);
      if (burgerOpen) {
        toggleElementClass(eventsNav, customClasses.hidden, 0);
      }
      scrollToTop(eventsSection);
      break;
    case "about":
      toggleElementClass(aboutNav, customClasses.active, 1);
      toggleElementClass(navContainer.children[0], customClasses.active, 1);
      toggleElementClass(aboutSection, customClasses.active, 1);
      if (burgerOpen) {
        toggleElementClass(aboutNav, customClasses.hidden, 0);
      }
      scrollToTop(aboutSection);
      break;
    case "connect":
      toggleElementClass(connectNav, customClasses.active, 1);
      toggleElementClass(navContainer.children[0], customClasses.active, 1);
      toggleElementClass(connectSection, customClasses.active, 1);
      if (burgerOpen) {
        toggleElementClass(connectNav, customClasses.hidden, 0);
      }
      scrollToTop(connectSection);
      break;
    case "gallery":
      toggleElementClass(galleryNav, customClasses.active, 1);
      toggleElementClass(navContainer.children[0], customClasses.active, 1);
      toggleElementClass(gallerySection, customClasses.active, 1);
      if (burgerOpen) {
        toggleElementClass(galleryNav, customClasses.hidden, 0);
      }
      scrollToTop(gallerySection);
      resetGallery();
      break;
    case "home":
      break;
  }
}

function handleSectionChange(section) {
  switch (section) {
    case "events":
      pageReformat(section);
      setActiveSection("events");
      break;
    case "about":
      pageReformat(section);
      setActiveSection("about");
      break;
    case "connect":
      pageReformat(section);
      setActiveSection("connect");
      break;
    case "gallery":
      pageReformat(section);
      setActiveSection("gallery");
      break;
    case "home":
      pageReformat(section);
      setActiveSection("home");
      break;
  }
  if (burgerOpen) {
    handleBurger();
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  form.reset();
  submitConfirmation.classList.remove("hidden");
  setTimeout(function () {
    submitConfirmation.style.opacity = "0";
  }, 3000);
  setTimeout(function () {
    submitConfirmation.classList.add("hidden");
    submitConfirmation.style.opacity = "1";
  }, 6000);
});

// handle up/down scrollwheel on the scroller, as most folks don't have horizontal scroll
imgScrollContainer.addEventListener('wheel', (e) => {
  e.preventDefault();  // stop scrolling in another direction
  imgScrollContainer.scrollLeft += (e.deltaY + e.deltaX);
  }, 
{passive: false}
);