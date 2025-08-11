// function locoInitalize() {
//     const scroll = new LocomotiveScroll({
//         el: document.querySelector('[data-scroll-container]'),
//         smooth: true,
//         multiplier: 0.7,
//         lerp: 0.08,
//         smartphone: { smooth: false },
//         tablet: { smooth: false }
//     });

//     // Integrate GSAP ScrollTrigger
//     scroll.on('scroll', ScrollTrigger.update);
//     ScrollTrigger.scrollerProxy('[data-scroll-container]', {
//         scrollTop(value) {
//             return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
//         },
//         getBoundingClientRect() {
//             return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//         },
//         pinType: document.querySelector('[data-scroll-container]').style.transform ? 'transform' : 'fixed'
//     });
//     ScrollTrigger.addEventListener('refresh', () => scroll.update());
//     ScrollTrigger.refresh();

//     // Update scroll after images load
//     window.addEventListener('load', () => {
//         const images = document.querySelectorAll('img');
//         let loadedImages = 0;
//         const totalImages = images.length;
//         if (totalImages === 0) {
//             scroll.update();
//             return;
//         }
//         images.forEach(img => {
//             if (img.complete) {
//                 loadedImages++;
//                 if (loadedImages === totalImages) {
//                     scroll.update();
//                 }
//             } else {
//                 img.addEventListener('load', () => {
//                     loadedImages++;
//                     if (loadedImages === totalImages) {
//                         scroll.update();
//                     }
//                 });
//                 img.addEventListener('error', () => {
//                     loadedImages++;
//                     if (loadedImages === totalImages) {
//                         scroll.update();
//                     }
//                 });
//             }
//         });
//     });

//     // Update on resize
//     window.addEventListener('resize', () => {
//         setTimeout(() => scroll.update(), 100);
//     });

//     return scroll;
// }

// // Cursor functionality for .cnt1 and .cnt2
// function cardShow() {
//     document.querySelectorAll(".cnt").forEach(function (cnt) {
//         cnt.addEventListener("mousemove", function (dets) {
//             const img = cnt.querySelector("img");
//             if (img) {
//                 const index = img.dataset.index;
//                 const cursorContainer = document.querySelector("#cursor > div");
//                 const cursorImage = document.querySelector(`#elem img:nth-child(${parseInt(index) + 1})`);
//                 if (cursorImage && cursorContainer) {
//                     document.querySelectorAll("#elem img").forEach(img => {
//                         img.style.opacity = 0;
//                         img.classList.remove("active");
//                     });
//                     cursorImage.style.opacity = 1;
//                     cursorImage.classList.add("active");
//                     cursorContainer.style.opacity = 1;
//                     cursorContainer.style.transform = `translate(${dets.clientX - cursorContainer.offsetWidth / 2}px, ${dets.clientY - cursorContainer.offsetHeight / 2}px)`;
//                 }
//             }
//         });

//         cnt.addEventListener("mouseleave", function () {
//             const cursorContainer = document.querySelector("#cursor > div");
//             if (cursorContainer) {
//                 cursorContainer.style.opacity = 0;
//                 document.querySelectorAll("#elem img").forEach(img => {
//                     img.style.opacity = 0;
//                     img.classList.remove("active");
//                 });
//             }
//         });
//     });
// }

// // Set initial animation states
// function valueSetters() {
//     gsap.set("#nav a", { y: "-100%", opacity: 0 });
//     gsap.set("#home .parent .child", { y: "100%" });
//     gsap.set("#home .row img", { opacity: 0 });

//     document.querySelectorAll("#Visual>g").forEach(function (e) {
//         const path = e.querySelector("path, polyline");
//         if (path) {
//             path.style.strokeDasharray = path.getTotalLength() + 'px';
//             path.style.strokeDashoffset = path.getTotalLength() + 'px';
//         }
//     });
// }

// // Wrap .reveal elements in spans
// function revealToSpan() {
//     document.querySelectorAll(".reveal").forEach(function (elem) {
//         var parent = document.createElement("span");
//         var child = document.createElement("span");
//         parent.classList.add("parent");
//         child.classList.add("child");
//         child.innerHTML = elem.innerHTML;
//         parent.appendChild(child);
//         elem.innerHTML = "";
//         elem.appendChild(parent);
//     });
// }

// // Loader animation
// function loaderAnimation() {
//     var tl = gsap.timeline();
//     tl.from("#loader .child span", {
//         x: 100,
//         stagger: 0.2,
//         duration: 1.4,
//         ease: "power3.inOut"
//     })
//     .to("#loader .parent .child", {
//         y: "-100%",
//         duration: 1,
//         delay: 1,
//         ease: "circ.inOut"
//     })
//     .to("#loader", {
//         height: 0,
//         duration: 1,
//         ease: "circ.inOut"
//     })
//     .fromTo("#green", {
//         height: "0%",
//         top: "100%"
//     }, {
//         height: "60%",
//         top: 0,
//         duration: 1,
//         ease: "circ.inOut"
//     }, "-=1")
//     .to("#green", {
//         height: "0%",
//         top: 0,
//         duration: 1,
//         ease: "circ.inOut",
//         onComplete: function () {
//             animateHomepage();
//         }
//     });
// }

// // Animate SVG paths
// function animateSvg() {
//     gsap.to("#Visual>g>g>path, #Visual>g>g>polyline", {
//         strokeDashoffset: 0,
//         duration: 1.2,
//         ease: "expo.inOut"
//     });
// }

// // Animate homepage elements
// function animateHomepage() {
//     var tl = gsap.timeline();
//     tl.to("#nav a", {
//         y: 0,
//         opacity: 1,
//         stagger: 0.03,
//         duration: 0.6,
//         ease: "expo.inOut"
//     })
//     .to("#home .parent .child", {
//         y: 0,
//         stagger: 0.05,
//         duration: 1.2,
//         ease: "expo.inOut"
//     })
//     .to("#home .row img", {
//         opacity: 1,
//         ease: "expo.inOut",
//         onComplete: function () {
//             animateSvg();
//         }
//     });
// }

// // Update time display
// function updateTime() {
//     const now = new Date();
//     const time = now.toLocaleTimeString('en-US', {
//         hour: '2-digit',
//         minute: '2-digit',
//         hour12: false
//     });
//     document.getElementById('current-time').textContent = time;
// }

// // Toggle dropdown menu
// function toggleDropdown() {
//     document.getElementById("dropdownMenu").classList.toggle("active");
// }

// // Close dropdown on outside click
// document.addEventListener("click", function (event) {
//     const dropdown = document.getElementById("dropdownMenu");
//     if (!dropdown.contains(event.target)) {
//         dropdown.classList.remove("active");
//     }
// });

// // Main initialization
// document.addEventListener('DOMContentLoaded', () => {
//     revealToSpan();
//     valueSetters();
//     loaderAnimation();
//     setInterval(updateTime, 1000);
//     updateTime();

//     const scroll = locoInitalize();
//     cardShow();

//     // Shery.js effects
//     Shery.imageEffect(".cnt1", {
//         style: 4,
//         debug : true,
//         config: {
//             "uColor": { "value": false },
//             "uSpeed": { "value": 0.6, "range": [0.1, 1], "rangep": [1, 10] },
//             "uAmplitude": { "value": 1.5, "range": [0, 5] },
//             "uFrequency": { "value": 3.5, "range": [0, 10] },
//             "geoVertex": { "range": [1, 64], "value": 32 },
//             "zindex": { "value": "0", "range": [-9999999, 9999999] },
//             "aspect": { "value": 0.8198269965557631 },
//             "ignoreShapeAspect": { "value": true },
//             "shapePosition": { "value": { "x": 0, "y": 0 } },
//             "shapeScale": { "value": { "x": 0.5, "y": 0.5 } },
//             "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] },
//             "shapeRadius": { "value": 0, "range": [0, 2] },
//             "currentScroll": { "value": 0 },
//             "scrollLerp": { "value": 0.07 },
//             "gooey": { "value": true },
//             "infiniteGooey": { "value": true },
//             "growSize": { "value": 2.92, "range": [1, 15] },
//             "durationOut": { "value": 0.7, "range": [0.1, 5] },
//             "durationIn": { "value": 0.89, "range": [0.1, 5] },
//             "displaceAmount": { "value": 0.5 },
//             "masker": { "value": false },
//             "maskVal": { "value": 1, "range": [1, 5] },
//             "scrollType": { "value": 0 },
//             "noEffectGooey": { "value": true },
//             "onMouse": { "value": 1 },
//             "noise_speed": { "value": 1.53, "range": [0, 10] },
//             "metaball": { "value": 0.2, "range": [0, 2] },
//             "discard_threshold": { "value": 0.51, "range": [0, 1] },
//             "antialias_threshold": { "value": 0, "range": [0, 0.1] },
//             "noise_height": { "value": 0.46, "range": [0, 2] },
//             "noise_scale": { "value": 10.69, "range": [0, 100] }
//         }
//     });

//     Shery.imageEffect(".cnt2", {
//         style: 2,
//         config: {
//             "resolutionXY": { "value": 416.67 },
//             "distortion": { "value": true },
//             "mode": { "value": -3 },
//             "mousemove": { "value": 0 },
//             "modeA": { "value": 1 },
//             "modeN": { "value": 0 },
//             "speed": { "value": 4.49, "range": [-500, 500], "rangep": [-10, 10] },
//             "frequency": { "value": 235.9, "range": [-800, 800], "rangep": [-50, 50] },
//             "angle": { "value": 1.33, "range": [0, 3.141592653589793] },
//             "waveFactor": { "value": 0.92, "range": [-3, 3] },
//             "color": { "value": 16773360 },
//             "pixelStrength": { "value": 2.31, "range": [-20, 100], "rangep": [-20, 20] },
//             "quality": { "value": 6.22, "range": [0, 10] },
//             "contrast": { "value": 1, "range": [-25, 25] },
//             "brightness": { "value": 1, "range": [-1, 25] },
//             "colorExposer": { "value": 0.18, "range": [-5, 5] },
//             "strength": { "value": 0.2, "range": [-40, 40], "rangep": [-5, 5] },
//             "exposer": { "value": 8, "range": [-100, 100] },
//             "zindex": { "value": "0", "range": [-9999999, 9999999] },
//             "aspect": { "value": 0.9225335050642495 },
//             "ignoreShapeAspect": { "value": true },
//             "shapePosition": { "value": { "x": 0, "y": 0 } },
//             "shapeScale": { "value": { "x": 0.5, "y": 0.5 } },
//             "shapeEdgeSoftness": { "value": 0.09, "range": [0, 0.5] },
//             "shapeRadius": { "value": 0, "range": [0, 2] },
//             "currentScroll": { "value": 0 },
//             "scrollLerp": { "value": 0.07 },
//             "gooey": { "value": false },
//             "infiniteGooey": { "value": false },
//             "growSize": { "value": 4, "range": [1, 15] },
//             "durationOut": { "value": 1, "range": [0.1, 5] },
//             "durationIn": { "value": 1.5, "range": [0.1, 5] },
//             "displaceAmount": { "value": 0.5 },
//             "masker": { "value": true },
//             "maskVal": { "value": 1.06, "range": [1, 5] },
//             "scrollType": { "value": 0 },
//             "geoVertex": { "range": [1, 64], "value": 1 },
//             "noEffectGooey": { "value": true },
//             "onMouse": { "value": 1 },
//             "noise_speed": { "value": 0.2, "range": [0, 10] },
//             "metaball": { "value": 0.2, "range": [0, 2] },
//             "discard_threshold": { "value": 0.5, "range": [0, 1] },
//             "antialias_threshold": { "value": 0.002, "range": [0, 0.1] },
//             "noise_height": { "value": 0.5, "range": [0, 2] },
//             "noise_scale": { "value": 10, "range": [0, 100] }
//         }
//     });

//     Shery.hoverWithMediaCircle(".workrow", {
//         images: ["image1.jpg", "image2.jpg", "image3.jpg"]
//     });
// });

function valueSetters() {
    gsap.set("#nav a", { y: "-100%", opacity: 0 });
    gsap.set("#home span .child", { y: "100%" });
    gsap.set("#home .row img", { opacity: 0 });

    document.querySelectorAll("#Visual>g").forEach(function (e) {
        e.childNodes[1].childNodes[1].style.strokeDasharray = e.childNodes[1].childNodes[1].getTotalLength() + 'px';
        e.childNodes[1].childNodes[1].style.strokeDashoffset = e.childNodes[1].childNodes[1].getTotalLength() + 'px';
    })
}

function revealToSpan() {
    document.querySelectorAll(".reveal").forEach(function (elem) {
        // create two spans
        var parent = document.createElement("span");
        var child = document.createElement("span");

        // parent and child both sets their respective classes
        parent.classList.add("parent");
        child.classList.add("child");

        // span parent gets child and child gets the elem details
        child.innerHTML = elem.innerHTML;
        parent.appendChild(child);

        // elem replaces its value with parent
        elem.innerHTML = "";
        elem.appendChild(parent);
    });
}

function loaderAnimation() {
    var tl = gsap.timeline();
    tl.from("#loader .child span", {
        x: 100,
        stagger: 0.2,
        duration: 1.4,
        ease: Power3.easeInOut,
    })
        .to("#loader .parent .child", {
            y: "-100%",
            duration: 1,
            delay: 1,
            ease: Circ.easeInOut,
        })
        .to("#loader", {
            height: 0,
            duration: 1,
            ease: Circ.easeInOut,
        })
        .fromTo("#green",
            {
                height: "0%",
                top: "8%"
            },
            {
                height: "6%",
                top: "0%",
                duration: 1,
                ease: Circ.easeInOut,
            }, "-=1") // Starts as loader finishes
        .to("#green", {
            height: "0%",
            top: "0%",
            duration: 1,
            ease: Circ.easeInOut,
            onComplete: function () {
                animateHomepage();
            }
        })
}

function animateSvg() {
    gsap.to("#Visual>g>g>path,#Visual>g>g>polyline", {
        strokeDashoffset: 0,
        duration: 1.2,
        ease: Expo.easeInOut,
    })
}

function animateHomepage() {

    var tl = gsap.timeline();
    tl.to("#nav a", {
        y: 0,
        opacity: 1,
        stagger: 0.03,
        duration: 0.6,
        ease: Expo.easeInOut,
    })
    tl.to("#home .parent .child", {
        y: 0,
        stagger: 0.05,
        duration: 1.2,
        ease: Expo.easeInOut,
    })
    tl.to("#home .row img", {
        opacity: 1,
        // duration: 0.4,
        dealy: -0.5,
        ease: Expo.easeInOut,
        onComplete: function () {
            animateSvg();
        }
    })
}

function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
    document.getElementById('current-time').textContent = time;
}

function toggleDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("active");
}

document.addEventListener("click", function (event) {
    const dropdown = document.getElementById("dropdownMenu");
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("active");
    }
});



Shery.hoverWithMediaCircle(".workrow,.page2,.page5-right-txt-1,#page6", {
    images: ["image1.jpg", "image2.jpg", "image3.jpg"],
    // videos: ["Assets/100908-video-720.mp4"],
});


function locoInitalize() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true,
        multiplier: 0.5, // Reduced multiplier for smoother scrolling
        lerp: 0.08, // Increased lerp for smoother transitions
        getDirection: true,
        smoothMobile: true,
        touchMultiplier: 2.5,
        smartphone: {
            smooth: true,
            multiplier: 0.5,
            breakpoint: 767
        },
        tablet: {
            smooth: true,
            multiplier: 0.5,
            breakpoint: 1024
        },
        reloadOnContextChange: true,
        inertia: 0.7 // Added inertia for smoother deceleration
    });

    // Update scroll on image load
    document.querySelectorAll('img').forEach(img => {
        img.onload = () => scroll.update();
    });

    // Update scroll on window resize with debounce
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            scroll.update();
        }, 250);
    });

    window.addEventListener('load', () => {
        setTimeout(() => {
            scroll.update();
        }, 500);
    });

    document.addEventListener('DOMContentLoaded', () => {
        scroll.update();
    });
}


document.querySelectorAll('.elem').forEach(elem => {
    const image = elem.style.getPropertyValue('--bg');
    elem.style.setProperty('--image', image);
    const style = document.createElement('style');
    style.innerHTML = `
        .elem[style*="${image}"]::before {
            background-image: ${image};
        }
    `;
    document.head.appendChild(style);
});

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: false, 
        spaceBetween: 100,
        initialSlide: 0, 
    });
}

const lenis = new Lenis();
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}


locoInitalize();
setInterval(updateTime, 1000);
updateTime();
revealToSpan();
valueSetters();
loaderAnimation();
requestAnimationFrame(raf);
swiperAnimation();

function firecrackers() {
    for (let i = 0; i < 6; i++) { // Reduced number of bursts
        setTimeout(() => {
            confetti({
                particleCount: 100, // Reduced particle count
                spread: 80,
                origin: { y: 0.6 },
                colors: ['#ff0000', '#ff8000', '#ffff00']
            });

            // White and yellow sparkles like stars
            confetti({
                particleCount: 40,
                spread: 120,
                origin: { y: 0.6 },
                colors: ['#ffffff', '#ffff66']
            });
        }, i * 300);
    }
}



function showDeveloperInfo() {
    console.log(
        "%cSite designed & developed by %cShashank Dev%c | Portfolio: %chttps://shashankdev-portfolio.netlify.app/",
        "color: #222; font-size: 1rem; font-family: gilroy, sans-serif;",
        "color: #14CF93; font-family: mazius, cursive; font-size: 1rem;",
        "color: #222; font-size: 1rem; font-family: gilroy, sans-serif;",
        "color: #2563eb; font-family: mazius, cursive; text-decoration: underline; font-size: 1rem;"
    );
}
showDeveloperInfo();

