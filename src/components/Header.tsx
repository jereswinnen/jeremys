import React from "react";
import { useRouter } from "next/router";
import { siteMap } from "../lib/siteMap";
import { Brand } from "@/assets";

interface HeaderProps {
  // Define your props here
  // Example: title: string;
}

const Header = () => {
  const router = useRouter();
  const currentPath = router.asPath;
  return (
    <header className="flex flex-row items-center justify-between">
      <a href="/" className="flex flex-row gap-2.5 items-center font-semibold">
        <Brand /> Jeremy Swinnen
      </a>
      <nav>
        <ul className="flex flex-row gap-5">
          {siteMap.map((page) => (
            <li key={page.path}>
              <a
                href={page.path}
                className={
                  currentPath === page.path
                    ? "font-semibold"
                    : "active:duration-0 transition-all duration-150"
                }
              >
                {page.title}
              </a>
              {/* Uncomment below to include subpages in the menu */}
              {/* 
              {page.subpages.length > 0 && (
                <ul>
                  {page.subpages.map((subpage) => (
                    <li key={subpage.path}>
                      <a href={subpage.path} className={currentPath === subpage.path ? 'current-page-class' : ''}>{subpage.title}</a>
                    </li>
                  ))}
                </ul>
              )}
              */}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
