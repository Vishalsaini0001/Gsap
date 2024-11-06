
function videoanimation() {
  let vdocon = document.querySelector("#vido");
  let cursor = document.querySelector("#cursor");

  vdocon.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });
  vdocon.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
  vdocon.addEventListener("mousemove", function (e) {
    gsap.to(cursor, {
      left: e.x,
      top: e.y,
    });
  });
}
videoanimation();

function loadinganimation() {
  gsap.from("#page1 h1", {
    y: 100,
    delay: 0.5,
    opacity: 0,
    stagger: 0.3,
    duration: 0.5,
  });
  gsap.from("#page1 #vido", {
    scale:0.9,
    opacity:0,
    delay: 1.3,
    duration: 0.5,
  });
}

loadinganimation();
