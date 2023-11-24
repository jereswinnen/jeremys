import React from "react";
import { siteMap } from "../lib/siteMap";

interface HeaderProps {
  // Define your props here
  // Example: title: string;
}

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
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
