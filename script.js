gsap.registerPlugin(ScrollTrigger);

// --- NEW & IMPROVED VIDEO SWITCH LOGIC ---
const videoElement = document.querySelector('.background-video');
const mobileMediaQuery = window.matchMedia("(max-width: 768px)");

const setVideoSource = (event) => {
    // `event.matches` batata hai ki media query true hai ya nahi
    if (event.matches) {
        // Agar screen mobile/tablet hai, to highlights2.mp4 lagao
        videoElement.src = 'highlights2.mp4';
    } else {
        // Warna PC ke liye highlights.mp4 lagao
        videoElement.src = 'highlights.mp4';
    }
};

// 1. Page load hote hi ek baar chalao
setVideoSource(mobileMediaQuery);

// 2. Ek listener add karo jo screen size badalne par function ko automatically call karega
mobileMediaQuery.addEventListener('change', setVideoSource);


// --- MOBILE SMOOTH SCROLL FIX (Same as before) ---
ScrollTrigger.normalizeScroll(true);

// --- INSTANT SCROLL ICON LOGIC (Same as before) ---
const scrollInstruction = document.querySelector('.scroll-instruction');
const handleScroll = () => {
    scrollInstruction.classList.toggle('hidden', window.scrollY > 10);
};
window.addEventListener('scroll', handleScroll);

// --- DEVICE-SPECIFIC HERO ANIMATIONS (Same as before) ---
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


// --- SIMPLE ANIMATION FOR VIDEO SECTION CONTENT (Same as before) ---
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