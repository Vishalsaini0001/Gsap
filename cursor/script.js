let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let image = document.querySelector("#image");

main.addEventListener("mousemove", function (e) {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    
  });
});
image.addEventListener("mouseenter", function () {
  gsap.to(cursor, {
   scale:3
  });
});
image.addEventListener("mouseleave", function () {
  gsap.to(cursor, {
   scale:1
  });
});
