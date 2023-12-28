import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import { DotsThreeCircle } from "@phosphor-icons/react";
import MainNavigation from "./MainNavigation";

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    if (isMenuOpen) {
      // Animate menu opening
      gsap.to(menuRef.current, { autoAlpha: 1, duration: 0.5 });
    } else {
      // Animate menu closing
      gsap.to(menuRef.current, { autoAlpha: 0, duration: 0.5 });
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="col-span-full flex flex-row items-center justify-between text-sm">
      <a href="/" className="flex flex-row items-center gap-1 font-semibold">
        Jeremy Swinnen
        <span className="text-neutral-300 font-normal">
          / Solving problems since '14
        </span>
      </a>
      <button
        className="flex items-center gap-0.5 font-medium"
        onClick={toggleMenu}
      >
        <DotsThreeCircle weight="bold" size={16} />
        Menu
      </button>
      <section
        ref={menuRef}
        className="invisible absolute left-0 top-0 z-50 h-full w-full bg-slate-400 opacity-0"
      >
        <MainNavigation isMenuOpen={isMenuOpen} />
      </section>
    </header>
  );
};

export default Header;
