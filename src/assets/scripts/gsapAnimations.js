import gsap from "gsap";

export function clipIntroAnimation() {
  const elements = document.querySelectorAll("[data-clip-intro]");

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
      },
    );
  });
}
