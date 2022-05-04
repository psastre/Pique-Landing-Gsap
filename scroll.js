var wtl = document.querySelector(".second-screen")
var rect2 = wtl.getBoundingClientRect();

var wtext = document.querySelector(".white-text")
var rect = wtext.getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);
var wtextPosition =rect.left;

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-screen",

    start: "top 160%",
    end: "top 40%",
    scrub: 1,
  },
});

tl.to(".left-container", { xPercent: 0, duration: 0.1 }).to(".left-container", {
  xPercent: 145,
  duration: 0.1,
});

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-screen",

    start: "top 160%",
    end: "top 40%",
    scrub: 1,
  },
});

tl2
  .to(".left-container-cel", { x: 0, duration: 0.1 })
  .to(".left-container-cel", { x: 190, duration: 0.1 });


console.log(rect2.top, rect2.right, rect2.bottom, rect2.left);

function doStuff() {
  console.log(rect2.top, rect2.right, rect2.bottom, rect2.left);
}
setInterval(doStuff, 1000);