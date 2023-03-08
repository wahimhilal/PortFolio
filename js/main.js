// Menu smartphone
const btn = document.querySelector("button");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu a");

function menuApparent() {
  btn.addEventListener("click", () => {
    menu.classList.toggle("show-menu");
  });
  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.toggle("show-menu");
    });
  });
}

menuApparent();

// Parallax titres Hero
gsap.to(".title", {
  scrollTrigger: {
    scrub: 2,
  },
  y: -1500,
});

// Parallax article à propos
gsap.from(".portrait", {
  scrollTrigger: {
    trigger: ".portrait",
    toggleActions: "restart restart none none",
  },
  x: -400,
  duration: 3,
});
gsap.from(".article", {
  scrollTrigger: {
    trigger: ".article",
    toggleActions: "restart restart none none",
  },
  x: 400,
  duration: 3,
});
// Section compétences
window.onload = function () {
  try {
    // set colour of text and outline of active tag
    TagCanvas.textColour = "#fff";
    TagCanvas.outlineColour = "#fff";
    TagCanvas.maxSpeed = 0.03;
    TagCanvas.minBrightness = 0.2;
    TagCanvas.depth = 0.92;
    TagCanvas.pulsateTo = 0.6;
    TagCanvas.initial = [0.1, -0.1];
    TagCanvas.Start("myCanvas");
  } catch (e) {
    // something went wrong, hide the canvas container
    document.getElementById("myCanvasContainer").style.display = "none";
  }
};

gsap.from(".skills", {
  scrollTrigger: {
    trigger: ".skills",
    toggleActions: "restart restart none none",
  },
  x: -400,
  duration: 3,
});
gsap.from(".widget", {
  scrollTrigger: {
    trigger: ".widget",
    toggleActions: "restart restart none none",
  },
  x: 400,
  duration: 3,
});

// Section expériences
gsap.from(".experience", {
  scrollTrigger: {
    trigger: ".experience",
    toggleActions: "restart restart none none",
  },
  x: -400,
  duration: 3,
});
// gsap.from(".cd-horizontal-timeline", {
//   scrollTrigger: {
//     trigger: ".cd-horizontal-timeline",
//     toggleActions: "restart restart none none",
//   },
//   x: 400,
//   duration: 3,
// });

// Section Portfolio
gsap.from(".portfolio", {
  scrollTrigger: {
    trigger: ".portfolio",
    toggleActions: "restart restart none none",
  },
  x: -400,
  duration: 3,
});
gsap.from(".card", {
  scrollTrigger: {
    trigger: ".card",
    toggleActions: "restart restart none none",
  },
  x: 400,
  duration: 3,
});
