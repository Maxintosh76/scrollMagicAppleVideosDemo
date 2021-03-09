const m1Section = document.querySelector('.m1Animation');
const video = m1Section.querySelector('video');
const text = m1Section.querySelector('h1');

const section = document.querySelector('.revolution');
const end = section.querySelector('h1');
const card = section.querySelector('.card');

//SCROL MAGIC
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
	duration: 6000,
	triggerElement: m1Section,
	triggerHook: 0,
})
.setPin(m1Section)
// .addIndicators()
.addTo(controller);

const textAnim = TweenMax.fromTo(text, 0, {opacity:1}, {opacity: 0})

let scene2 = new ScrollMagic.Scene({
	duration: 1800,
	triggerElement: m1Section,
	triggerHook: 0
})
.setTween(textAnim)
.addTo(controller);

let accelamount = 0.1;
let scrollpos = 0;
let delay = 2;

scene.on('update', e=> {
	scrollpos = e.scrollPos / 1000;
})
setInterval(() =>{
	delay += (scrollpos - delay) * accelamount;
	video.currentTime = delay ;
}, 33.3)


let scene3 = new ScrollMagic.Scene({
	triggerElement: end,
	triggerHook: 0.9, // show, when scrolled 10% into view
	duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
	offset: 50 // move trigger to center of element
})
	.setClassToggle(card, "visible") // add class to reveal
	.addTo(controller);