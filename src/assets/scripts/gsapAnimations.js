import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { animate, scroll } from "motion";

// Register GSAP plugins
gsap.registerPlugin(CustomEase, ScrollTrigger);

// Define custom easing
CustomEase.create("ease-cubic-circ", "M0,0 C0.645,0 0.045,1 1,1");

export function introAnimation() {
  const mm = gsap.matchMedia();
  const intro = document.querySelector("[data-introOverlay]");
  const figure = document.querySelector("[data-introImage]");
  const leftText = document.querySelector("[data-introTextLeft]");
  const rightText = document.querySelector("[data-introTextRight]");
  const content = document.querySelector("[data-mainContent]");

  // Mobile animation (base styles)
  mm.add("(max-width: 735px)", () => {
    gsap.set(figure, {
      clipPath: "inset(100% 0 0 0)",
      opacity: 0,
    });

    gsap.set([leftText, rightText], {
      opacity: 0,
      filter: "blur(5px)",
      x: (index) => (index === 0 ? 10 : -10), // Left text moves from right, right text from left
    });

    gsap.set(content, {
      opacity: 0,
      y: 20,
    });

    const tlMobile = gsap.timeline({
      delay: 0.5,
      onComplete: () => {
        gsap.set(intro, { pointerEvents: "none", display: "none" });
      },
    });

    tlMobile
      .to(figure, {
        clipPath: "inset(0% 0 0 0)",
        opacity: 1,
        duration: 0.8,
        ease: "ease-cubic-circ",
      })
      .to(
        [leftText, rightText],
        {
          opacity: (i) => (i === 0 ? 1 : 0.7),
          x: 0,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.1,
          ease: "ease-cubic-circ",
        },
        ">-0.4",
      )
      .to(
        intro,
        {
          clipPath: "inset(0 0 100% 0)",
          duration: 0.8,
          ease: "ease-cubic-circ",
        },
        "+=0.8",
      )
      .to(
        content,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "ease-cubic-circ",
        },
        ">-0.4",
      );

    return tlMobile;
  });

  // Desktop animation (min-width: 736px)
  mm.add("(min-width: 736px)", () => {
    gsap.set(figure, {
      clipPath: "inset(100% 0 0 0)",
      scale: 1.05,
      opacity: 0,
    });

    gsap.set([leftText, rightText], {
      opacity: 0,
      filter: "blur(5px)",
      x: (index) => (index === 0 ? 20 : -20), // Left text moves from right, right text from left
    });

    gsap.set(content, {
      opacity: 0,
      y: 30,
    });

    const tl = gsap.timeline({
      delay: 1,
      onComplete: () => {
        gsap.set(intro, { pointerEvents: "none", display: "none" });
      },
    });

    tl.to(figure, {
      clipPath: "inset(0% 0 0 0)",
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "ease-cubic-circ",
    })
      .to(
        leftText,
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "ease-cubic-circ",
        },
        ">-0.7",
      )
      .to(
        rightText,
        {
          opacity: 0.7,
          x: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "ease-cubic-circ",
        },
        "<",
      )
      .to(
        intro,
        {
          clipPath: "inset(0 0 100% 0)",
          duration: 1,
          ease: "ease-cubic-circ",
        },
        "+=1.0",
      )
      .to(
        content,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "ease-cubic-circ",
        },
        ">-0.7",
      );

    return tl;
  });
}

export function parallaxScroll() {
  const elements = document.querySelectorAll("[data-speed]");

  elements.forEach((element) => {
    const speed = parseFloat(element.dataset.speed) || 1;
    let startScrollPosition = null;

    // const debugLabel = document.createElement("div");
    // debugLabel.style.position = "absolute";
    // debugLabel.style.top = "4px";
    // debugLabel.style.left = "4px";
    // debugLabel.style.background = "red";
    // debugLabel.style.color = "white";
    // debugLabel.style.padding = "2px 6px";
    // debugLabel.style.fontSize = "12px";
    // debugLabel.style.zIndex = "1000";
    // element.style.position = "relative";
    // element.appendChild(debugLabel);

    scroll((progress, info) => {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Start when element's top hits viewport bottom,
      // End when element's bottom hits viewport top
      if (rect.top < viewportHeight && rect.bottom > 0) {
        // Set start position only once when element first enters viewport
        if (startScrollPosition === null) {
          startScrollPosition = info.y.current;
        }

        // Calculate offset relative to when element entered viewport
        const relativeScroll = info.y.current - startScrollPosition;
        const yOffset = relativeScroll * (1 - speed);

        element.style.transform = `translate3d(0, ${yOffset}px, 0)`;
        // debugLabel.textContent = `Speed: ${speed}, Offset: ${Math.round(yOffset)}px`;
      }
    });
  });
}

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

export function imageReveal() {
  const elements = document.querySelectorAll("[data-imageReveal]");

  elements.forEach((el) => {
    gsap.fromTo(
      el,
      {
        scale: 1.05,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "ease-cubic-circ",
        scrollTrigger: {
          trigger: el,
          start: "top 75%", // Triggers when the element's top reaches 75% of the viewport height
          toggleActions: "play none none none", // Plays the animation once when triggered
        },
      },
    );
  });
}

export function textBlurFadeIn() {
  const elements = document.querySelectorAll("[data-textBlurFadeIn]");

  elements.forEach((element) => {
    gsap.killTweensOf(element);
    gsap.set(element, {
      y: 20,
      opacity: 0,
      filter: "blur(8px)",
    });

    gsap.to(element, {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1,
      delay: 2,
      ease: "ease-cubic-circ",
      clearProps: "all",
    });
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

export function blurRevealFromRight() {
  const elements = document.querySelectorAll("[data-blurRevealFromLeft]");

  elements.forEach((el) => {
    gsap.fromTo(
      el,
      {
        opacity: 0,
        x: 20,
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
