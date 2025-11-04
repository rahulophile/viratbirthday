gsap.registerPlugin(ScrollTrigger);

// --- VIDEO SWITCH LOGIC ---
const videoElement = document.querySelector('.background-video');
const mobileMediaQuery = window.matchMedia("(max-width: 768px)");

const setVideoSource = (event) => {
    if (event.matches) {
        videoElement.src = 'highlights2.mp4';
    } else {
        videoElement.src = 'highlights.mp4';
    }
};
setVideoSource(mobileMediaQuery);
mobileMediaQuery.addEventListener('change', setVideoSource);


// --- MOBILE SMOOTH SCROLL FIX ---
ScrollTrigger.normalizeScroll(true);

// --- INSTANT SCROLL ICON LOGIC ---
const scrollInstruction = document.querySelector('.scroll-instruction');
const handleScroll = () => {
    scrollInstruction.classList.toggle('hidden', window.scrollY > 10);
};
window.addEventListener('scroll', handleScroll);

// --- DEVICE-SPECIFIC HERO ANIMATIONS ---
ScrollTrigger.matchMedia({
    "(min-width: 769px)": function() {
        const pcTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero-section", start: "top top", end: "+=2000",
                scrub: 1.5, pin: true,
            }
        });
        pcTimeline.to(".virat-png", { x: "0%", ease: "power2.inOut" });
        pcTimeline.to(".hero-text h1 span", { y: "0%", stagger: 0.05, ease: "power3.out" }, "-=0.5");
    },
    "(max-width: 768px)": function() {
        const mobileTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero-section", start: "top top", end: "+=2000",
                scrub: 1.5, pin: true,
            }
        });
        mobileTimeline.to(".virat-png", { x: "0%", ease: "power2.inOut" });
        mobileTimeline.to(".hero-text h1 span", { y: "0%", stagger: 0.05, ease: "power3.out" }, "-=0.5");
    }
});


// --- SIMPLE ANIMATION FOR VIDEO SECTION CONTENT ---
gsap.timeline({
    scrollTrigger: {
        trigger: ".video-section",
        start: "top 60%",
        toggleActions: "play none none reverse"
    }
})
.from(".video-text-content, .credit-pill", {
    opacity: 0,
    y: 30,
    duration: 1.2,
    ease: "power3.out",
    stagger: 0.2
});