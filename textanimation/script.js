function breakText() {
  let h1 = document.querySelector("h1");
  let h1Text = h1.textContent;

  let splittedText = h1Text.split("");

  let half = splittedText.length / 2;

  let clutter = ""
  splittedText.forEach(function (elem, idx) {
    if (idx < half) {
      clutter += `<span class="a" >${elem} </span>`;
    } else {
      clutter += `<span class="b" >${elem} </span>`;
    }
  });
  h1.innerHTML = clutter;
}
breakText();

const tl = gsap.timeline();



gsap.from(".a", {
  y: 50,
  stagger: 0.15,
  duration: 0.5,
  opacity: 0,
  
});
gsap.from(".b", {
  y: 50,
  stagger: - 0.15,
  duration: 0.5,
  opacity: 0,
 
})
