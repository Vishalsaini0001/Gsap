gsap.from("#page1 #box", {
  duration: 3,
  delay: 0.5,
  rotate: 360,
  
  scale:0
});
gsap.to("#page2 #box", {
    duration: 3,
    
    rotate: 360,
    
    
 scrollTrigger:{
  trigger:"#page2 #box",
  markers:true,
  start:"top 50%",
  scrub:3,
  pin:true 
 }
});
