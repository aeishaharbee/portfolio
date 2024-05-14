const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const splashScreen = document.getElementById("splash");
const headerScreen = document.getElementById("header");

// Start typing effect for the first line
setTimeout(() => {
  line1.style.opacity = "1";
}, 500);

// Start typing effect for the second line after a delay
setTimeout(() => {
  line2.style.opacity = "1";
}, 3000);

// Hide the splash screen and reveal the header after typing is done
setTimeout(() => {
  splashScreen.classList.add("move-up");
  headerScreen.style.opacity = "1";
}, 4500);

// Reset the overflow after the splash screen is moved up
splashScreen.addEventListener("animationend", () => {
  document.body.style.overflow = "auto";
});

// NAVBAR
const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

dropdownToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    // Find the next sibling element which is the dropdown menu
    const dropdownMenu = toggle.nextElementSibling;

    // Toggle the 'hidden' class to show or hide the dropdown menu
    if (dropdownMenu.classList.contains("hidden")) {
      // Hide any open dropdown menus before showing the new one
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        menu.classList.add("hidden");
      });

      dropdownMenu.classList.remove("hidden");
    } else {
      dropdownMenu.classList.add("hidden");
    }
  });
});

// Optional: Clicking outside of an open dropdown menu closes it
window.addEventListener("click", (event) => {
  if (!event.target.matches(".dropdown-toggle")) {
    document.querySelectorAll(".dropdown-menu").forEach((menu) => {
      if (!menu.contains(event.target)) {
        menu.classList.add("hidden");
      }
    });
  }
});

const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileMenu = document.querySelector(".navigation-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// socials
const insta = document.querySelector(".insta");
insta.addEventListener("mouseover", function () {
  document.body.style.backgroundImage = "url('src/images/bg-ig.jpg')";
  $(".linkedin").css("opacity", "0");
  $(".tele").css("opacity", "0");
  $(".youtube").css("opacity", "0");
});
insta.addEventListener("mouseout", function () {
  document.body.style.backgroundImage = "none";
  $(".linkedin").css("opacity", "1");
  $(".tele").css("opacity", "1");
  $(".youtube").css("opacity", "1");
});

const linkedin = document.querySelector(".linkedin");
linkedin.addEventListener("mouseover", function () {
  document.body.style.backgroundImage = "url('src/images/bg-lin.webp')";
  $(".insta").css("opacity", "0");
  $(".tele").css("opacity", "0");
  $(".youtube").css("opacity", "0");
});
linkedin.addEventListener("mouseout", function () {
  document.body.style.backgroundImage = "none";
  $(".insta").css("opacity", "1");
  $(".tele").css("opacity", "1");
  $(".youtube").css("opacity", "1");
});

const tele = document.querySelector(".telegram");
tele.addEventListener("mouseover", function () {
  document.body.style.backgroundImage = "url('src/images/bg-tele.avif')";
  $(".insta").css("opacity", "0");
  $(".linkedin").css("opacity", "0");
  $(".youtube").css("opacity", "0");
});
tele.addEventListener("mouseout", function () {
  document.body.style.backgroundImage = "none";
  $(".insta").css("opacity", "1");
  $(".linkedin").css("opacity", "1");
  $(".youtube").css("opacity", "1");
});

const yt = document.querySelector(".youtube");
yt.addEventListener("mouseover", function () {
  document.body.style.backgroundImage = "url('src/images/bg-yt.avif')";
  $(".insta").css("opacity", "0");
  $(".tele").css("opacity", "0");
  $(".linkedin").css("opacity", "0");
});
yt.addEventListener("mouseout", function () {
  document.body.style.backgroundImage = "none";
  $(".insta").css("opacity", "1");
  $(".tele").css("opacity", "1");
  $(".linkedin").css("opacity", "1");
});

// CURSOR
const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("a");
const navlinks = document.querySelectorAll("nav ul li");

document.addEventListener("mousemove", (e) => {
  let leftPosition = e.pageX + 4;
  let topPosition = e.pageY + 4;

  cursor.style.left = leftPosition + "px";
  cursor.style.top = topPosition + "px";
});

links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    cursor.classList.add("large");
  });
});

links.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("large");
  });
});

navlinks.forEach((li, i) => {
  li.style.animationDelay = 0 + i * 140 + "ms";
});

// SKILLS
// html
