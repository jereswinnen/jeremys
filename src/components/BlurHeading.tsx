import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

interface BlurHeadingProps {
  text: string;
  className?: string;
}

const BlurHeading: React.FC<BlurHeadingProps> = ({ text, className = "" }) => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;

    // Split the text into characters
    const splitText = new SplitType(headingRef.current, {
      types: "chars",
      tagName: "span",
    });

    // Create the animation
    gsap.fromTo(
      splitText.chars,
      {
        scaleY: 0.1,
        scaleX: 1.8,
        filter: "blur(10px) brightness(50%)",
      },
      {
        duration: 1.5,
        stagger: 0.05,
        scaleY: 1,
        scaleX: 1,
        filter: "blur(0px) brightness(100%)",
        ease: "power4.out",
      }
    );

    // Cleanup
    return () => {
      splitText.revert();
    };
  }, []);

  return (
    <h1
      ref={headingRef}
      className={`text-[3.65rem] leading-tight font-bold ${className}`}
    >
      {text}
    </h1>
  );
};

export default BlurHeading;
