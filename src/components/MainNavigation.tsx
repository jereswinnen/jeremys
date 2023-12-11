import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { siteMap } from "../lib/siteMap";

interface MainNavigationProps {
  isMenuOpen: boolean;
}

const MainNavigation: React.FC<MainNavigationProps> = ({ isMenuOpen }) => {
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (isMenuOpen && navRef.current) {
      const navItems = Array.from(navRef.current.children);
      gsap.fromTo(
        navItems,
        { autoAlpha: 0, y: 10 },
        { autoAlpha: 1, y: 0, stagger: 0.1, duration: 0.3 },
      );
    }
  }, [isMenuOpen]);

  return (
    <nav ref={navRef} className="main-navigation">
      <ul className="navigation-list">
        {siteMap.map((page) => (
          <li key={page.path} className="navigation-item">
            <a href={page.path} className="navigation-link">
              {page.title}
            </a>
            {/* Implement subpages if your sitemap includes them */}
            {/* {page.subpages && (
              <ul className="sub-navigation-list">
                {page.subpages.map((subpage) => (
                  <li key={subpage.path} className="sub-navigation-item">
                    <a href={subpage.path} className="sub-navigation-link">
                      {subpage.title}
                    </a>
                  </li>
                ))}
              </ul>
            )} */}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNavigation;
