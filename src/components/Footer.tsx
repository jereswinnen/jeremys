import React from "react";

interface FooterProps {
  // Define your props here
  // Example: title: string;
}

const Footer: React.FC<FooterProps> = (
  {
    /* destructure your props here */
  }
) => {
  return <footer className="bg-slate-300">This is the footer</footer>;
};

export default Footer;
