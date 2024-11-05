let initial = "M 10 80 Q 250 83 490 80";
let final ="M 10 80 Q 250 83 490 80";


const string = document.querySelector("#string")

string.addEventListener("mousemove", function(e){
    const initial = `M 10 80 Q 250 ${e.y} 490 80`;

    gsap.to("svg path",{
        attr:{d:initial},
        ease: "bounce.out",
        duration:0.3
    })
})
string.addEventListener("mouseleave",function(){

    gsap.to("svg path",{
        attr:{d:final},
        ease: "elastic.out(1,0.3)",
        duration:0.3
    })
}) 