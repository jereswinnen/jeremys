import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(CustomEase, ScrollTrigger);

// Define custom easing
CustomEase.create("ease-cubic-circ", "M0,0 C0.645,0 0.045,1 1,1");

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
        ease: "ease-cubic-circ",
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
        ease: "ease-cubic-circ",
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
        ease: "ease-cubic-circ",
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
        ease: "ease-cubic-circ",
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
        ease: "ease-cubic-circ",
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
        ease: "ease-cubic-circ",
        delay: 3, //0.3
      },
    );
  });
}

export function projectListImageReveal() {
  const elements = document.querySelectorAll("[data-projectListImageReveal]");

  elements.forEach((li) => {
    const figure = li.querySelector("figure");
    const img = li.querySelector("figure img");

    // Set initial states
    gsap.set(figure, {
      height: 0,
      clipPath: "inset(0 0 100% 0)",
    });

    gsap.set(img, {
      scale: 1.08,
    });

    // Get natural height
    figure.style.height = "auto";
    const naturalHeight = figure.offsetHeight;
    figure.style.height = "";

    // Create hover timeline
    const tl = gsap.timeline({ paused: true });

    tl.to(figure, {
      height: naturalHeight,
      clipPath: "inset(0 0 0% 0)",
      duration: 0.9,
      ease: "ease-cubic-circ",
    }).to(
      img,
      {
        scale: 1,
        duration: 0.9,
        ease: "ease-cubic-circ",
      },
      0,
    );

    // Add hover listeners
    li.addEventListener("mouseenter", () => tl.play());
    li.addEventListener("mouseleave", () => tl.reverse());
  });
}

export function footerScrollExpand() {
  const elements = document.querySelectorAll("[data-footerScrollExpand]");

  elements.forEach((el) => {
    gsap.set(el, {
      clipPath: "polygon(2.5% 0, 97.5% 0, 97.5% 100%, 2.5% 100%)",
    });

    const content = el.querySelector("[data-footerContent]");

    if (content) {
      gsap.set(content, {
        opacity: 0,
        y: 30,
      });
    }

    gsap.to(el, {
      clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
      ease: "ease-cubic-circ",
      scrollTrigger: {
        trigger: el,
        start: "top bottom", // Animation starts when top of footer hits bottom of viewport
        end: "75% bottom", // Animation ends when 75% of footer reaches bottom of viewport
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    if (content) {
      gsap.to(content, {
        opacity: 1,
        y: 0,
        ease: "ease-cubic-circ",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }
  });
}
