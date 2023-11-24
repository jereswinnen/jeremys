import React from "react";
import { siteMap } from "../lib/siteMap";
import { Brand } from "@/assets";

interface HeaderProps {
  // Define your props here
  // Example: title: string;
}

const Header = () => {
  return (
    <header className="flex flex-row justify-between">
      <a href="/">
        <Brand /> Jeremy Swinnen
      </a>
      <nav>
        <ul className="flex flex-row gap-5">
          {siteMap.map((page) => (
            <li key={page.path}>
              <a href={page.path}>{page.title}</a>
              {/* Uncomment below to include subpages in the menu */}
              {/* 
              {page.subpages.length > 0 && (
                <ul>
                  {page.subpages.map((subpage) => (
                    <li key={subpage.path}>
                      <a href={subpage.path}>{subpage.title}</a>
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
