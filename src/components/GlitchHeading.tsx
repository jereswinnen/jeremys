import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitType from "split-type";

interface GlitchHeadingProps {
  text: string;
  className?: string;
}

const LETTERS_AND_SYMBOLS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "-",
  "_",
  "+",
  "=",
  ";",
  ":",
  "<",
  ">",
  ",",
];

const GlitchHeading: React.FC<GlitchHeadingProps> = ({
  text,
  className = "",
}) => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const splitTextRef = useRef<SplitType | null>(null);
  const originalCharsRef = useRef<string[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const resetText = () => {
    if (!splitTextRef.current?.chars) return;

    splitTextRef.current.chars.forEach((char, index) => {
      gsap.killTweensOf(char);
      if (char instanceof HTMLElement) {
        char.innerHTML = originalCharsRef.current[index] || "";
      }
    });
  };

  const animateText = () => {
    if (!splitTextRef.current?.chars || isAnimating) return;

    setIsAnimating(true);
    resetText();

    splitTextRef.current.chars.forEach((char, position) => {
      if (!(char instanceof HTMLElement)) return;

      let initialHTML = char.innerHTML;
      let repeatCount = 0;

      gsap.fromTo(
        char,
        { opacity: 0 },
        {
          duration: 0.03,
          onStart: () => {
            gsap.set(char, { "--opa": 1 });
          },
          onComplete: () => {
            gsap.set(char, { innerHTML: initialHTML, delay: 0.03 });
            // Check if this is the last character to complete
            if (position === splitTextRef.current!.chars!.length - 1) {
              setIsAnimating(false);
            }
          },
          repeat: 3,
          onRepeat: () => {
            repeatCount++;
            if (repeatCount === 1) {
              gsap.set(char, { "--opa": 0 });
            }
          },
          repeatRefresh: true,
          repeatDelay: 0.04,
          delay: (position + 1) * 0.07,
          innerHTML: () =>
            LETTERS_AND_SYMBOLS[
              Math.floor(Math.random() * LETTERS_AND_SYMBOLS.length)
            ],
          opacity: 1,
        }
      );
    });
  };

  useEffect(() => {
    if (!headingRef.current) return;

    const splitOptions = {
      type: "words,chars",
      tagName: "span",
    };

    splitTextRef.current = new SplitType(headingRef.current, splitOptions);

    if (splitTextRef.current.chars) {
      originalCharsRef.current = splitTextRef.current.chars.map((char) =>
        char instanceof HTMLElement ? char.innerHTML : ""
      );
    }

    // Initial animation on mount
    animateText();

    // Handle resize
    const handleResize = () => {
      if (splitTextRef.current) {
        splitTextRef.current.split(splitOptions);
        if (splitTextRef.current.chars) {
          originalCharsRef.current = splitTextRef.current.chars.map((char) =>
            char instanceof HTMLElement ? char.innerHTML : ""
          );
        }
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      resetText();
      if (splitTextRef.current) {
        splitTextRef.current.revert();
      }
    };
  }, []);

  return (
    <h1
      ref={headingRef}
      className={`text-[3.65rem] leading-tight font-bold ${className}`}
      onMouseEnter={animateText}
    >
      {text}
    </h1>
  );
};

export default GlitchHeading;
