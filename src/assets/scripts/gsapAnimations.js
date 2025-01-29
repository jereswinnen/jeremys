import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function typewriterEffect() {
  document.querySelectorAll("[data-typewriter]").forEach((element) => {
    const finalText = element.textContent.trim();

    element.style.visibility = "hidden";
    element.textContent = "";

    requestAnimationFrame(() => {
      gsap.to(element, {
        duration: finalText.length * 0.025, // Adjust speed per character
        onStart: () => {
          element.style.visibility = "visible";
        },
        onUpdate: function () {
          const progress = Math.floor(this.progress() * finalText.length);
          element.textContent = finalText.slice(0, progress);
        },
        ease: "power1.inOut",
        delay: 3,
      });
    });
  });
}

export function imageClipFromBottom() {
  const elements = document.querySelectorAll("[data-imageClipFromBottom]");

  elements.forEach((el) => {
    gsap.fromTo(
      el,
      {
        clipPath: "inset(100% 0 0 0)",
        scale: 1.05,
        opacity: 0,
      },
      {
        clipPath: "inset(0% 0 0 0)",
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "expo.Out",
        delay: 2, //0.3
      },
    );
  });
}

export function imageBlurReveal() {
  const elements = document.querySelectorAll("[data-imageBlurReveal]");

  elements.forEach((el) => {
    gsap.fromTo(
      el,
      {
        scale: 1.05,
        opacity: 0,
        filter: "blur(12px)",
      },
      {
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: el,
          start: "top 75%", // Triggers when the element’s top reaches 75% of the viewport height
          toggleActions: "play none none none", // Plays the animation once when triggered
          // markers: true, // Debug lines to visualize trigger points
        },
      },
    );
  });
}

export function textBlurFadeIn() {
  const elements = document.querySelectorAll("[data-textBlurFadeIn]");

  elements.forEach((el) => {
    gsap.fromTo(
      el,
      {
        opacity: 0,
        filter: "blur(6px)",
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "expo.out",
        delay: 2.25, //0.3
      },
    );
  });
}

export function blurRevealFromLeft() {
  const elements = document.querySelectorAll("[data-blurRevealFromLeft]");

  elements.forEach((el) => {
    gsap.fromTo(
      el,
      {
        opacity: 0,
        x: -20,
        filter: "blur(5px)",
      },
      {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.out",
        delay: 2.25, //0.3
      },
    );
  });
}

export function blurRevealFromTop() {
  const elements = document.querySelectorAll("[data-blurRevealFromTop]");

  elements.forEach((el) => {
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: -30,
        filter: "blur(5px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.out",
        delay: 3, //0.3
      },
    );
  });
}

export function blurRevealFromBottom() {
  const elements = document.querySelectorAll("[data-blurRevealFromBottom]");

  elements.forEach((el) => {
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 30,
        filter: "blur(5px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.out",
        delay: 3, //0.3
      },
    );
  });
}
