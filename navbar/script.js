const tl = gsap.timeline();
tl.from("header h2",{
    y:-30,
    duration:1,
    delay:1

})
tl.from("#nav h4",{
    y:-30,
    duration:1,
    stagger:1

})