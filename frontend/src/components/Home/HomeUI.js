// // import './Home.js';
// // import './Home.css';
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import LocomotiveScroll from "locomotive-scroll";

// gsap.registerPlugin(ScrollTrigger);

// /* SMOOTH SCROLL */
// const scroller = new LocomotiveScroll({
//   el: document.querySelector(".container"),
//   smooth: true
// });

// scroller.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy(".container", {
//   scrollTop(value) {
//     return arguments.length
//       ? scroller.scrollTo(value, 0, 0)
//       : scroller.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//     return {
//       left: 0,
//       top: 0,
//       width: window.innerWidth,
//       height: window.innerHeight
//     };
//   }
// });

// ScrollTrigger.addEventListener("refresh", () => scroller.update());

// ScrollTrigger.refresh();

// /* COLOR CHANGER */
// window.addEventListener("load", function () {
//   const scrollColorElems = document.querySelectorAll("[data-bgcolor]");
//   scrollColorElems.forEach((colorSection, i) => {
//     const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
//     const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;

//     ScrollTrigger.create({
//       trigger: colorSection,
//       scroller: ".container",
//       start: "top 50%",
//       onEnter: () =>
//         gsap.to("body", {
//           backgroundColor: colorSection.dataset.bgcolor,
//           color: colorSection.dataset.textcolor,
//           overwrite: "auto"
//         }),
//       onLeaveBack: () =>
//         gsap.to("body", {
//           backgroundColor: prevBg,
//           color: prevText,
//           overwrite: "auto"
//         })
//     });
//   });
// });
